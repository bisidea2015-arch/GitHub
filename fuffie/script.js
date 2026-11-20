/**
 * Gap versus the reference video: the hero is procedural Three.js, not the
 * filmed product renders. The grinder, beans, droplets, glass beaker, ceramic
 * cup, pour, and Kufita bags are lathed meshes and primitives. There is no
 * fluid sim, scanned hardware, or photographic latte art — the swirl is a
 * painted texture plus orbiting drops, and scroll only scrubs transforms.
 */
(function () {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fallback = document.getElementById("gl-fallback");

  if (!window.THREE) {
    if (fallback) fallback.hidden = false;
    return;
  }

  const THREE = window.THREE;
  const canvas = document.getElementById("view");
  const ui1 = document.getElementById("ui-s1");
  const ui3 = document.getElementById("ui-s3");
  const wordNorfee = document.getElementById("word-norfee");
  const wordDui = document.getElementById("word-dui");
  const wordFey = document.getElementById("word-fey");
  const wordCoffee = document.getElementById("word-coffee");
  const dots = document.getElementById("dots");

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      premultipliedAlpha: false,
    });
  } catch (err) {
    if (fallback) fallback.hidden = false;
    return;
  }

  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 40);
  camera.position.set(0, 0.95, 8.35);
  camera.lookAt(0, -0.05, 0);

  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(studioEnv(), 0.04).texture;
  pmrem.dispose();

  scene.add(new THREE.HemisphereLight(0xfff7f0, 0xe7d3c2, 1.15));
  const key = new THREE.DirectionalLight(0xfff4ea, 2.6);
  key.position.set(-4.2, 6.2, 5.4);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xf0d2b8, 0.85);
  fill.position.set(5, 1.6, 3.2);
  scene.add(fill);
  const rim = new THREE.DirectionalLight(0xffffff, 1.15);
  rim.position.set(-1.5, 3.2, -4.5);
  scene.add(rim);

  const matClay = new THREE.MeshPhysicalMaterial({
    color: 0xf1e4d6,
    roughness: 0.72,
    metalness: 0,
    clearcoat: 0.06,
  });
  const matClayWarm = new THREE.MeshPhysicalMaterial({
    color: 0xedd8c4,
    roughness: 0.68,
    metalness: 0,
  });
  const matBean = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    vertexColors: true,
    roughness: 0.38,
    metalness: 0.03,
    clearcoat: 0.75,
    clearcoatRoughness: 0.28,
    envMapIntensity: 0.45,
  });
  const matCrease = new THREE.MeshStandardMaterial({
    color: 0x1a0d09,
    roughness: 0.62,
  });
  const matCaramel = new THREE.MeshPhysicalMaterial({
    color: 0xc6864a,
    roughness: 0.16,
    metalness: 0.02,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    envMapIntensity: 1.2,
  });
  const matGold = new THREE.MeshStandardMaterial({
    color: 0xd7b07a,
    metalness: 0.72,
    roughness: 0.28,
  });
  const matPearl = new THREE.MeshPhysicalMaterial({
    color: 0xf7f4f0,
    roughness: 0.22,
    clearcoat: 0.55,
    clearcoatRoughness: 0.2,
  });
  const matMetal = new THREE.MeshStandardMaterial({
    color: 0xd4cfc7,
    metalness: 0.9,
    roughness: 0.32,
  });
  const matBlack = new THREE.MeshStandardMaterial({
    color: 0x2a2725,
    metalness: 0.35,
    roughness: 0.46,
  });
  const matCoffee = new THREE.MeshPhysicalMaterial({
    color: 0x3e2418,
    roughness: 0.24,
    metalness: 0.04,
    clearcoat: 0.65,
    clearcoatRoughness: 0.2,
  });
  const matGrounds = new THREE.MeshStandardMaterial({
    color: 0x3a261c,
    roughness: 0.92,
  });
  const matCeramic = new THREE.MeshPhysicalMaterial({
    color: 0xf6f2ec,
    roughness: 0.4,
    clearcoat: 0.28,
    clearcoatRoughness: 0.4,
    sheen: 0.25,
    sheenColor: new THREE.Color(0xfff8f2),
  });
  const matGlass = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.1,
    depthWrite: false,
    side: THREE.FrontSide,
  });
  const matGlassEdge = new THREE.MeshBasicMaterial({
    color: 0xfffdfb,
    transparent: true,
    opacity: 0.72,
    depthWrite: false,
  });

  const beanGeo = makeBeanGeometry();
  const dropGeo = makeDropletGeometry();
  const shadowMat = new THREE.MeshBasicMaterial({
    map: shadowTexture(),
    transparent: true,
    depthWrite: false,
  });

  const grinder = buildGrinder();
  scene.add(grinder);

  const cluster = new THREE.Group();
  scene.add(cluster);
  const floaters = [];
  const hero = new THREE.Mesh(beanGeo, matBean);
  hero.scale.setScalar(0.78);
  hero.rotation.set(0.25, 0.2, 0.08);
  const groove = new THREE.Mesh(new THREE.CapsuleGeometry(0.055, 1.15, 4, 12), matCrease);
  groove.position.set(0, 0, 0.2);
  hero.add(groove);
  placeFloater(hero, 0.02, 1.02, 0.55, 0.55, 0.2, true);

  const twinL = new THREE.Mesh(beanGeo, matBean);
  const twinR = new THREE.Mesh(beanGeo, matBean);
  twinL.visible = false;
  twinR.visible = false;
  cluster.add(twinL, twinR);

  placeFloater(claySphere(0.46), -1.78, 0.72, -0.2, 2.2, 1.1);
  placeFloater(claySphere(0.4), 1.62, 1.22, -0.1, 2.0, 2.2);
  placeFloater(claySphere(0.18, matClayWarm), 1.18, 0.18, 0.45, 2.4, 0.6);
  placeFloater(sphere(matPearl, 0.13), -1.05, 1.48, 0.4, 2.1, 2.8);
  placeFloater(sphere(matGold, 0.08), -1.22, 0.42, 0.5, 2.6, 1.7);
  const drop = new THREE.Mesh(dropGeo, matCaramel);
  drop.scale.setScalar(0.2);
  drop.rotation.z = 0.4;
  placeFloater(drop, 1.22, 0.38, 0.62, 2.2, 0.4);
  const miniBeanA = new THREE.Mesh(beanGeo, matBean);
  miniBeanA.scale.setScalar(0.16);
  miniBeanA.rotation.z = 0.8;
  placeFloater(miniBeanA, -1.42, 0.62, 0.45, 2.7, 1.4);
  const miniBeanB = new THREE.Mesh(beanGeo, matBean);
  miniBeanB.scale.setScalar(0.12);
  miniBeanB.rotation.x = 0.6;
  placeFloater(miniBeanB, 0.62, 1.52, 0.28, 2.5, 2.4);

  const burstBeans = [];
  for (let i = 0; i < 12; i++) {
    const b = new THREE.Mesh(beanGeo, matBean);
    const ang = (i / 12) * Math.PI * 2;
    b.userData.dir = new THREE.Vector3(Math.cos(ang) * 1.15, Math.sin(ang) * 0.75 + 0.35, Math.sin(ang * 2) * 0.45).normalize();
    b.userData.hop = 1.15 + (i % 5) * 0.28;
    b.userData.spin = 0.4 + (i % 4) * 0.35;
    b.scale.setScalar(0.1 + (i % 3) * 0.035);
    b.visible = false;
    cluster.add(b);
    burstBeans.push(b);
  }

  const scene2 = new THREE.Group();
  scene.add(scene2);
  const beaker = buildBeaker();
  scene2.add(beaker);
  const sideDisc = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.54, 0.08, 40), matClay);
  sideDisc.position.set(1.62, -0.22, 0.05);
  const sideOrb = new THREE.Mesh(new THREE.SphereGeometry(0.16, 28, 18), matCaramel);
  sideOrb.position.set(1.62, 0.0, 0.12);
  const matBubble = matGlass.clone();
  matBubble.opacity = 0.05;
  const bubble = new THREE.Mesh(new THREE.SphereGeometry(0.22, 32, 24), matBubble);
  bubble.position.set(-1.62, 0.95, 0.2);
  const bubble2 = new THREE.Mesh(new THREE.SphereGeometry(0.1, 24, 16), matBubble);
  bubble2.position.set(1.15, -0.55, 0.4);
  scene2.add(sideDisc, sideOrb, bubble, bubble2);

  const fallBeans = [];
  for (let i = 0; i < 7; i++) {
    const b = new THREE.Mesh(beanGeo, matBean);
    b.scale.setScalar(0.1 + (i % 3) * 0.025);
    b.userData.phase = i * 0.17;
    b.userData.rad = 0.08 + (i % 4) * 0.06;
    beaker.add(b);
    fallBeans.push(b);
  }
  const splashes = [];
  for (let i = 0; i < 6; i++) {
    const s = new THREE.Mesh(i % 2 ? dropGeo : new THREE.SphereGeometry(1, 16, 12), matCoffee);
    s.scale.setScalar(0.06);
    s.userData.ang = (i / 6) * Math.PI * 2;
    beaker.add(s);
    splashes.push(s);
  }

    const pourIn = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.06, 1.45, 16, 1, true), matCoffee);
  pourIn.position.set(0.05, 1.42, 0.05);
  pourIn.visible = false;
  scene.add(pourIn);

  const cupRig = buildCup();
  scene.add(cupRig.group);

  const bags = buildBags();
  scene.add(bags.group);

  const accents = buildCupAccents();
  cupRig.group.add(accents);

  const stream = new THREE.Mesh(
    new THREE.CylinderGeometry(0.03, 0.03, 1, 10),
    matCoffee
  );
  stream.visible = false;
  stream.frustumCulled = false;
  scene.add(stream);

  const spout = beaker.userData.spout;
  const lip = cupRig.lip;
  const tmpA = new THREE.Vector3();
  const tmpB = new THREE.Vector3();

  let target = 0;
  let t = 0;
  const IN_A = 0.14;
  const IN_B = 0.4;
  const OUT_A = 0.6;
  const OUT_B = 0.88;

  function frame(now) {
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    target = clamp01(window.scrollY / max);
    const follow = reduced ? 1 : 0.22;
    t += (target - t) * follow;
    if (Math.abs(target - t) < 0.0008) t = target;

    const time = now * 0.001;
    const enter = smoother(IN_A, IN_B, t);
    const leave = smoother(OUT_A, OUT_B, t);
    updateWorld(time, enter, leave);
    updateDom(t, enter, leave);
    renderer.render(scene, camera);

    window.__fuffie = { t, target, enter, leave };
    requestAnimationFrame(frame);
  }

  function updateWorld(time, enter, leave) {
    const idle = reduced ? 0 : 1;
    grinder.position.y = -1.92 + Math.sin(time * 0.8) * 0.03 * idle * (1 - enter) - enter * 5.8;
    grinder.rotation.y = Math.sin(time * 0.45) * 0.05 * idle * (1 - enter);
    grinder.visible = enter < 0.98;

    floaters.forEach(function (mesh) {
      const data = mesh.userData;
      const bob = Math.sin(time * 0.9 + data.phase) * 0.055 * idle * (1 - enter);
      mesh.position.copy(data.home).addScaledVector(data.dir, enter * data.kick);
      mesh.position.y += bob;
      const s = data.baseScale * (data.hero ? 1 - enter : 1 - enter * 0.9);
      mesh.scale.setScalar(Math.max(0.001, s));
      mesh.visible = s > 0.03;
      if (!data.hero) mesh.rotation.y += 0.004 * idle;
    });
    hero.rotation.x = 0.25 + Math.sin(time * 0.45) * 0.05 * idle;
    hero.rotation.y = 0.15 + time * 0.12;
    hero.rotation.z = 0.06;

    const appear = Math.min(1, enter * 3.2);
    const splitFade = 1 - Math.max(0, (enter - 0.38) / 0.62);
    const twinS = 0.58 * appear * splitFade;
    twinL.visible = twinS > 0.04;
    twinR.visible = twinS > 0.04;
    twinL.scale.setScalar(Math.max(0.001, twinS));
    twinR.scale.setScalar(Math.max(0.001, twinS));
    twinL.position.set(-0.08 - enter * 1.45, 0.9 + enter * 0.4, 0.45);
    twinR.position.set(0.12 + enter * 1.35, 0.78 + enter * 0.2, 0.32);
    twinL.rotation.set(0.35, time * 0.45, 0.55 + enter * 0.4);
    twinR.rotation.set(0.1, -time * 0.35, -0.7 - enter * 0.3);

    burstBeans.forEach(function (b, i) {
      const show = enter > 0.03 && enter < 0.97;
      const s = show ? b.scale.x : 0;
      const grow = Math.min(1, enter * 4) * (1 - Math.max(0, (enter - 0.42) / 0.58));
      const sc = (0.1 + (i % 3) * 0.03) * grow;
      b.visible = sc > 0.02;
      b.scale.setScalar(Math.max(0.001, sc));
      b.position.copy(b.userData.dir).multiplyScalar(0.2 + enter * b.userData.hop);
      b.position.y += 0.55;
      b.rotation.x = time * b.userData.spin + i;
      b.rotation.y = time * 0.7;
      void s;
    });

    scene2.position.y = lerp(-5.3, 0.02, enter) + Math.pow(leave, 1.15) * 4.4;
    scene2.position.x = leave * 0.2;
    scene2.visible = enter > 0.03 && leave < 0.96;
    beaker.rotation.z = -1.02 * leave;
    beaker.rotation.x = -0.42 * leave;
    beaker.position.x = 1.2 * leave;
    beaker.position.y = 0.15 + 0.5 * leave;
    bubble.position.y = 0.95 + Math.sin(time * 0.8) * 0.05 * idle;

    const brewing = enter > 0.62 && leave < 0.22;
    pourIn.visible = brewing;
    fallBeans.forEach(function (b) {
      b.visible = brewing;
      if (!brewing) return;
      const cycle = (time * 0.42 + b.userData.phase) % 1;
      const ang = b.userData.phase * 12;
      b.position.set(Math.cos(ang) * b.userData.rad, lerp(1.55, 0.18, cycle), Math.sin(ang) * b.userData.rad);
      const sink = cycle > 0.72 ? 1 - (cycle - 0.72) / 0.28 : 1;
      b.scale.setScalar((0.1 + (b.userData.phase % 0.05)) * sink);
      b.rotation.y = time + b.userData.phase;
    });
    splashes.forEach(function (s, i) {
      const pulse = brewing ? 0.55 + Math.sin(time * 6 + i) * 0.45 : 0.25;
      s.position.set(Math.cos(s.userData.ang) * 0.28, 0.22 + pulse * 0.16, Math.sin(s.userData.ang) * 0.22);
      s.scale.setScalar(0.045 + pulse * 0.05);
      s.visible = scene2.visible;
    });

    cupRig.group.position.y = lerp(-4.5, -0.42, leave);
    cupRig.group.visible = leave > 0.05;
    cupRig.group.rotation.y = Math.sin(time * 0.35) * 0.03 * idle;
    const fill = smoother(0.22, 0.92, leave);
    const worldH = 0.82 * Math.max(0.001, fill);
    cupRig.coffee.scale.y = Math.max(0.001, fill);
    cupRig.coffee.position.y = 0.2 + worldH / 2;
    cupRig.swirl.position.y = 0.2 + worldH + 0.012;
    cupRig.swirl.visible = fill > 0.08;
    cupRig.disc.rotation.z = -time * 0.45;
    cupRig.orbits.forEach(function (orb, i) {
      const a = time * 0.75 + i * 2.1;
      orb.position.set(Math.cos(a) * (0.18 + i * 0.08), cupRig.swirl.position.y + 0.03, Math.sin(a) * 0.12);
      orb.visible = fill > 0.35;
    });

    const bagT = smoother(0.32, 0.82, leave);
    bags.left.position.y = lerp(3.6, 1.08, bagT);
    bags.right.position.y = lerp(3.9, 1.2, bagT);
    bags.group.visible = bagT > 0.02;
    bags.left.rotation.z = 0.14 + Math.sin(time * 0.6) * 0.02 * idle;
    bags.right.rotation.z = -0.2 + Math.cos(time * 0.5) * 0.02 * idle;

    const showStream = leave > 0.18;
    stream.visible = showStream;
    if (showStream) {
      scene.updateMatrixWorld(true);
      spout.getWorldPosition(tmpA);
      lip.getWorldPosition(tmpB);
      if (leave > 0.72) tmpA.set(0.02, 2.55, 0.08);
      if (tmpA.distanceTo(tmpB) > 0.25) {
        const mid = tmpA.clone().lerp(tmpB, 0.5);
        mid.x += 0.18 * (1 - leave);
        mid.y += 0.15;
        const curve = new THREE.QuadraticBezierCurve3(tmpA.clone(), mid, tmpB.clone());
        const radius = 0.04 + 0.018 * Math.min(1, leave * 1.3);
        stream.geometry.dispose();
        stream.geometry = new THREE.TubeGeometry(curve, 22, radius, 8, false);
      }
    }
  }

  function updateDom(progress, enter, leave) {
    const nout = smoother(0.12, 0.36, progress);
    wordNorfee.style.opacity = String(1 - nout);
    wordNorfee.style.transform = "translate(-50%, calc(-50% - " + nout * 120 + "px))";

    const din = smoother(0.3, 0.46, progress);
    const dout = smoother(0.58, 0.76, progress);
    const dOp = din * (1 - dout);
    wordDui.style.opacity = String(dOp);
    wordFey.style.opacity = String(dOp);
    wordDui.style.transform = "translate(" + -100 * dout + "px, " + (lerp(28, 0, din) - 80 * dout) + "px)";
    wordFey.style.transform = "translate(" + 90 * dout + "px, " + (lerp(20, 0, din) - 36 * dout) + "px)";

    const cin = smoother(0.66, 0.86, progress);
    wordCoffee.style.opacity = String(cin);
    wordCoffee.style.transform = "translate(calc(-50% + " + (1 - cin) * -80 + "px), -50%)";

    const s1 = 1 - smoother(0.12, 0.32, progress);
    ui1.style.opacity = String(s1);
    ui1.style.transform = "translateY(" + (1 - s1) * 52 + "px)";
    setLayerPointer(ui1, s1 > 0.4);

    const s3 = smoother(0.78, 0.92, progress);
    ui3.style.opacity = String(s3);
    ui3.style.transform = "translateY(" + (1 - s3) * 24 + "px)";
    setLayerPointer(ui3, s3 > 0.4);

    const dotOp = smoother(0.4, 0.5, progress) * (1 - smoother(0.64, 0.76, progress));
    dots.style.opacity = String(dotOp);

    window.__fuffieScene = progress < 0.34 ? 1 : progress < 0.72 ? 2 : 3;
    void enter;
    void leave;
  }

  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / Math.max(1, h);
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setSize(w, h, false);
  }

  document.querySelectorAll("[data-jump]").forEach(function (el) {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      scrollToT(Number(el.getAttribute("data-jump")));
    });
  });
  document.querySelectorAll(".nav a:not([data-jump])").forEach(function (el) {
    el.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });
  document.querySelectorAll(".arrow").forEach(function (el) {
    el.addEventListener("click", function () {
      const idx = target < 0.34 ? 0 : target < 0.72 ? 1 : 2;
      const next = Math.min(2, Math.max(0, idx + Number(el.getAttribute("data-step"))));
      scrollToT(next / 2);
    });
  });
  window.addEventListener("keydown", function (event) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    const idx = target < 0.34 ? 0 : target < 0.72 ? 1 : 2;
    const dir = event.key === "ArrowRight" ? 1 : -1;
    scrollToT(Math.min(2, Math.max(0, idx + dir)) / 2);
  });
  window.addEventListener("resize", resize);

  resize();
  document.fonts.ready.then(function () {
    bags.repaint();
  });
  window.__fuffieReady = true;
  requestAnimationFrame(frame);

  function scrollToT(next) {
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({ top: max * clamp01(next), behavior: reduced ? "auto" : "smooth" });
  }

  function setLayerPointer(layer, on) {
    layer.querySelectorAll("button, a").forEach(function (el) {
      el.style.pointerEvents = on ? "auto" : "none";
    });
  }

  function placeFloater(mesh, x, y, z, kick, phase, heroFlag) {
    mesh.position.set(x, y, z);
    mesh.userData.home = new THREE.Vector3(x, y, z);
    const dir = new THREE.Vector3(x, y * 0.35, z);
    if (dir.lengthSq() < 0.04) dir.set(0, 1, 0);
    dir.normalize();
    mesh.userData.dir = dir;
    mesh.userData.kick = kick;
    mesh.userData.phase = phase;
    mesh.userData.baseScale = mesh.scale.x || 1;
    mesh.userData.hero = !!heroFlag;
    cluster.add(mesh);
    floaters.push(mesh);
  }

  function claySphere(radius, material) {
    return new THREE.Mesh(new THREE.SphereGeometry(radius, 40, 28), material || matClay);
  }

  function sphere(material, radius) {
    return new THREE.Mesh(new THREE.SphereGeometry(radius, 28, 20), material);
  }

  function buildGrinder() {
    const g = new THREE.Group();
    const add = function (geo, mat, x, y, z) {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z);
      g.add(m);
      return m;
    };
    add(new THREE.CylinderGeometry(0.46, 0.5, 0.1, 32), matBlack, 0, 0.08, 0);
    add(new THREE.CylinderGeometry(0.3, 0.28, 0.28, 28), matGrounds, 0, 0.28, 0);
    add(new THREE.CylinderGeometry(0.34, 0.32, 0.4, 32, 1, true), matGlass, 0, 0.32, 0);
    add(new THREE.TorusGeometry(0.33, 0.02, 8, 24), matGlassEdge, 0, 0.5, 0).rotation.x = Math.PI / 2;
    add(new THREE.CylinderGeometry(0.4, 0.43, 0.52, 40), matMetal, 0, 0.82, 0);
    add(new THREE.CylinderGeometry(0.415, 0.415, 0.07, 32), matBlack, 0, 1.02, 0);
    add(new THREE.SphereGeometry(0.045, 16, 12), matBlack, 0, 0.78, 0.4);
    add(new THREE.CylinderGeometry(0.2, 0.28, 0.16, 28), matBlack, 0, 1.18, 0);
    add(new THREE.CylinderGeometry(0.36, 0.2, 0.42, 36, 1, true), matGlass, 0, 1.46, 0);
    add(new THREE.TorusGeometry(0.35, 0.022, 8, 28), matGlassEdge, 0, 1.66, 0).rotation.x = Math.PI / 2;
    add(new THREE.CylinderGeometry(0.32, 0.36, 0.06, 32), matBlack, 0, 1.7, 0);
    add(new THREE.SphereGeometry(0.16, 20, 12), matBlack, 0, 1.76, 0).scale.y = 0.4;
    for (let i = 0; i < 8; i++) {
      const b = add(beanGeo, matBean, Math.cos(i * 1.4) * 0.12, 1.38 + (i % 3) * 0.08, Math.sin(i * 1.7) * 0.1);
      b.scale.setScalar(0.07);
      b.rotation.set(i, i * 0.4, 0.2);
    }
    const sh = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.5), shadowMat);
    sh.rotation.x = -Math.PI / 2;
    sh.position.y = 0.01;
    g.add(sh);
    g.position.y = -1.92;
    return g;
  }

  function buildBeaker() {
    const g = new THREE.Group();
    const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.12, 0.09, 48), matClay);
    pedestal.position.y = -0.78;
    g.add(pedestal);
    const plate = new THREE.Mesh(new THREE.CylinderGeometry(1.28, 1.3, 0.045, 48), matClayWarm);
    plate.position.y = -0.86;
    g.add(plate);
    const wall = new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.5, 1.22, 48, 1, true), matGlass);
    wall.renderOrder = 2;
    wall.position.y = -0.08;
    g.add(wall);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.58, 0.028, 10, 36), matGlassEdge);
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 0.52;
    g.add(rim);
    const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.03, 32), matGlassEdge);
    foot.position.y = -0.68;
    g.add(foot);
    const liquid = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.4, 0.62, 36), matCoffee);
    liquid.position.y = -0.32;
    g.add(liquid);
    const spoutMesh = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.26, 16, 1, true), matGlass);
    spoutMesh.rotation.z = -Math.PI / 2.15;
    spoutMesh.position.set(0.66, 0.48, 0);
    g.add(spoutMesh);
    const marker = new THREE.Object3D();
    marker.position.set(0.86, 0.5, 0);
    g.add(marker);
    g.userData.spout = marker;
    const sh = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 2.4), shadowMat);
    sh.rotation.x = -Math.PI / 2;
    sh.position.y = -0.9;
    g.add(sh);
    g.position.y = 0.15;
    return g;
  }

  function buildCup() {
    const group = new THREE.Group();
    const pivot = new THREE.Group();
    pivot.rotation.x = 0.42;
    group.add(pivot);
    const cup = new THREE.Mesh(cupGeometry(), matCeramic);
    pivot.add(cup);
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.06, 16, 32, Math.PI * 1.2), matCeramic);
    handle.position.set(1.02, 0.7, 0);
    handle.rotation.z = -0.7;
    pivot.add(handle);
    const coffee = new THREE.Mesh(new THREE.CylinderGeometry(0.74, 0.66, 0.82, 40), matCoffee);
    coffee.position.y = 0.55;
    pivot.add(coffee);
    const swirlMat = new THREE.MeshStandardMaterial({
      map: paintSwirl(),
      roughness: 0.35,
      metalness: 0,
      emissive: 0x3a2416,
      emissiveIntensity: 0.18,
    });
    const disc = new THREE.Mesh(new THREE.CircleGeometry(0.73, 56), swirlMat);
    const swirl = new THREE.Group();
    swirl.rotation.x = -Math.PI / 2;
    swirl.add(disc);
    swirl.position.y = 0.98;
    pivot.add(swirl);
    const orbits = [0, 1, 2].map(function (i) {
      const orb = new THREE.Mesh(
        i === 2 ? dropGeo : new THREE.SphereGeometry(0.055, 16, 12),
        i === 1 ? matPearl : matClayWarm
      );
      if (i === 2) orb.scale.setScalar(0.09);
      pivot.add(orb);
      return orb;
    });
    const lipMarker = new THREE.Object3D();
    lipMarker.position.set(0, 1.12, 0.15);
    pivot.add(lipMarker);
    const sh = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.2), shadowMat);
    sh.rotation.x = -Math.PI / 2;
    sh.position.y = 0.02;
    group.add(sh);
    group.position.set(0, -4.5, 0.15);
    group.scale.setScalar(1.08);
    return { group: group, coffee: coffee, swirl: swirl, disc: disc, orbits: orbits, lip: lipMarker };
  }

  function buildCupAccents() {
    const g = new THREE.Group();
    const blobA = new THREE.Mesh(new THREE.SphereGeometry(0.72, 40, 28), matClay);
    blobA.position.set(-1.72, 0.05, -1.05);
    blobA.scale.set(1, 0.78, 0.9);
    const blobB = new THREE.Mesh(new THREE.SphereGeometry(0.78, 40, 28), matClayWarm);
    blobB.position.set(1.78, 0.12, -0.95);
    blobB.scale.set(1.05, 0.74, 0.88);
    const blobC = new THREE.Mesh(new THREE.SphereGeometry(0.36, 28, 20), matClay);
    blobC.position.set(-1.15, -0.05, 0.35);
    const caramel = new THREE.Mesh(dropGeo, matCaramel);
    caramel.scale.setScalar(0.2);
    caramel.position.set(1.35, 0.15, 0.55);
    const beanL = new THREE.Mesh(beanGeo, matBean);
    beanL.scale.setScalar(0.28);
    beanL.position.set(-1.75, 0.95, 0.15);
    beanL.rotation.z = 0.9;
    const beanR = new THREE.Mesh(beanGeo, matBean);
    beanR.scale.setScalar(0.26);
    beanR.position.set(1.62, 1.45, 0.25);
    beanR.rotation.z = -0.4;
    const beanT = new THREE.Mesh(beanGeo, matBean);
    beanT.scale.setScalar(0.16);
    beanT.position.set(-0.35, 1.7, 0.2);
    g.add(blobA, blobB, blobC, caramel, beanL, beanR, beanT);
    return g;
  }

  function buildBags() {
    const group = new THREE.Group();
    const tex = paintBag();
    function bag() {
      const root = new THREE.Group();
      const body = new THREE.Mesh(
        new THREE.BoxGeometry(0.74, 1.16, 0.16),
        new THREE.MeshStandardMaterial({ color: 0xf3eadf, roughness: 0.88 })
      );
      const seal = new THREE.Mesh(
        new THREE.BoxGeometry(0.76, 0.1, 0.2),
        new THREE.MeshStandardMaterial({ color: 0xe4d5c4, roughness: 0.8 })
      );
      seal.position.y = 0.52;
      const face = new THREE.Mesh(
        new THREE.PlaneGeometry(0.7, 1.08),
        new THREE.MeshBasicMaterial({ map: tex })
      );
      face.position.z = 0.082;
      root.add(body, seal, face);
      return root;
    }
    const left = bag();
    const right = bag();
    left.position.set(-1.28, 3.8, -0.35);
    right.position.set(1.32, 4.1, -0.2);
    left.rotation.y = 0.18;
    right.rotation.y = -0.22;
    left.scale.setScalar(0.82);
    right.scale.setScalar(0.86);
    left.rotation.z = 0.14;
    right.rotation.z = -0.2;
    group.add(left, right);
    return {
      group: group,
      left: left,
      right: right,
      repaint: function () {
        paintBag(tex);
        tex.needsUpdate = true;
      },
    };
  }

  function cupGeometry() {
    const pts = [
      [0.0, 0.02],
      [0.48, 0.02],
      [0.56, 0.08],
      [0.74, 0.4],
      [0.96, 0.9],
      [1.08, 1.16],
      [1.02, 1.28],
      [0.92, 1.2],
      [0.84, 0.98],
      [0.7, 0.48],
      [0.58, 0.18],
      [0.0, 0.14],
    ];
    return new THREE.LatheGeometry(pts.map(function (p) {
      return new THREE.Vector2(p[0], p[1]);
    }), 56);
  }

  function makeBeanGeometry() {
    const geo = new THREE.SphereGeometry(1, 80, 64);
    const pos = geo.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      v.x *= 0.58;
      v.z *= 0.38;
      const end = 1 - 0.22 * v.y * v.y;
      v.x *= 0.82 + 0.18 * end;
      v.z *= 0.8 + 0.2 * end;
      v.x += v.y * v.y * 0.12 * (v.x < 0 ? -1 : 1);
      const creaseMask = Math.exp(-Math.pow(v.x / 0.07, 2));
      v.z -= creaseMask * Math.max(0, v.z + 0.05) * 0.85;
      pos.setXYZ(i, v.x, v.y * 0.92, v.z);
      const dark = Math.min(1, creaseMask * 1.35);
      colors[i * 3] = 0.1 - dark * 0.07;
      colors[i * 3 + 1] = 0.04 - dark * 0.028;
      colors[i * 3 + 2] = 0.02 - dark * 0.014;
    }
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    return geo;
  }

  function makeDropletGeometry() {
    const geo = new THREE.SphereGeometry(1, 48, 40);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      let x = pos.getX(i);
      let y = pos.getY(i);
      let z = pos.getZ(i);
      const narrow = y < -0.15 ? 1 : 1 - (y + 0.15) * 0.42;
      x *= Math.max(0.22, narrow);
      z *= Math.max(0.22, narrow);
      y = y * 0.82 - 0.08;
      pos.setXYZ(i, x, y, z);
    }
    geo.computeVertexNormals();
    return geo;
  }

  function shadowTexture() {
    const c = document.createElement("canvas");
    c.width = 128;
    c.height = 128;
    const g = c.getContext("2d");
    const grd = g.createRadialGradient(64, 64, 8, 64, 64, 64);
    grd.addColorStop(0, "rgba(70,48,36,0.28)");
    grd.addColorStop(1, "rgba(70,48,36,0)");
    g.fillStyle = grd;
    g.fillRect(0, 0, 128, 128);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  function paintSwirl() {
    const s = 512;
    const c = document.createElement("canvas");
    c.width = s;
    c.height = s;
    const ctx = c.getContext("2d");
    const grd = ctx.createRadialGradient(s / 2, s / 2, 20, s / 2, s / 2, s / 2);
    grd.addColorStop(0, "#f4e7d4");
    grd.addColorStop(0.28, "#a56b45");
    grd.addColorStop(0.62, "#5a321f");
    grd.addColorStop(1, "#3a2216");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, s, s);
    ctx.strokeStyle = "rgba(246, 236, 222, 0.92)";
    ctx.lineWidth = 22;
    ctx.lineCap = "round";
    ctx.beginPath();
    for (let i = 0; i <= 680; i++) {
      const a = (i / 680) * Math.PI * 5.4;
      const r = (i / 680) * s * 0.4;
      const x = s / 2 + Math.cos(a) * r;
      const y = s / 2 + Math.sin(a) * r * 0.78;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.strokeStyle = "rgba(92, 52, 32, 0.55)";
    ctx.lineWidth = 8;
    ctx.beginPath();
    for (let i = 0; i <= 480; i++) {
      const a = (i / 480) * Math.PI * 4.2 + 1.2;
      const r = 18 + (i / 480) * s * 0.28;
      const x = s / 2 + Math.cos(a) * r * 0.85;
      const y = s / 2 + Math.sin(a) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    return tex;
  }

  function paintBag(existing) {
    const w = 512;
    const h = 768;
    const c = existing && existing.image ? existing.image : document.createElement("canvas");
    c.width = w;
    c.height = h;
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#f4ecdf";
    ctx.fillRect(0, 0, w, h);
    const shade = ctx.createLinearGradient(0, 0, w, 0);
    shade.addColorStop(0, "rgba(90,60,40,0.1)");
    shade.addColorStop(0.5, "rgba(255,255,255,0)");
    shade.addColorStop(1, "rgba(90,60,40,0.14)");
    ctx.fillStyle = shade;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#e7d9c6";
    ctx.fillRect(0, 0, w, 96);
    ctx.fillStyle = "#d9c7b0";
    ctx.fillRect(0, 84, w, 18);
    roundRect(ctx, 64, 200, w - 128, 340, 18);
    ctx.fillStyle = "#5c3828";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(w / 2, 292, 34, 0, Math.PI * 2);
    ctx.fillStyle = "#f4ecdf";
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(w / 2, 292, 14, 20, 0.2, 0, Math.PI * 2);
    ctx.fillStyle = "#5c3828";
    ctx.fill();
    ctx.fillStyle = "#f6f0e8";
    ctx.textAlign = "center";
    ctx.font = "700 84px Fraunces, Georgia, serif";
    ctx.fillText("Kufita", w / 2, 392);
    ctx.font = "600 24px Manrope, sans-serif";
    ctx.fillText("COFFEE", w / 2, 446);
    ctx.fillStyle = "#5c3828";
    ctx.fillRect(78, 620, w - 156, 8);
    if (existing && existing.isTexture) return existing;
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    return tex;
  }

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function studioEnv() {
    const env = new THREE.Scene();
    const room = new THREE.Mesh(
      new THREE.BoxGeometry(14, 10, 14),
      new THREE.MeshBasicMaterial({ color: 0xf3e7db, side: THREE.BackSide })
    );
    env.add(room);
    const warm = new THREE.Mesh(
      new THREE.SphereGeometry(0.6, 16, 12),
      new THREE.MeshBasicMaterial({ color: 0xfff6ee })
    );
    warm.position.set(-2.4, 3.2, 1.5);
    env.add(warm);
    const cool = new THREE.Mesh(
      new THREE.SphereGeometry(0.35, 16, 12),
      new THREE.MeshBasicMaterial({ color: 0xd7c4b2 })
    );
    cool.position.set(3, 1, -1);
    env.add(cool);
    const a = new THREE.PointLight(0xfff8f2, 12, 30);
    a.position.set(-3, 4, 3);
    const b = new THREE.PointLight(0xe7cbb4, 6, 30);
    b.position.set(4, 1.2, 2);
    env.add(a, b);
    return env;
  }

  function clamp01(v) {
    return Math.min(1, Math.max(0, v));
  }

  function smoother(a, b, x) {
    const u = clamp01((x - a) / (b - a));
    return u * u * (3 - 2 * u);
  }

  function lerp(a, b, u) {
    return a + (b - a) * u;
  }
})();
