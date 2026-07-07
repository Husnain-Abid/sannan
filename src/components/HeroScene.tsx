"use client";
import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ParticleField({ mouse }: { mouse: { x: number; y: number } }) {
  const ref = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const isCoarse =
    typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
  const COUNT = isCoarse ? 220 : 520;

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const col = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      const t = Math.random();
      col[i * 3 + 0] = 0.3 + t * 0.4;
      col[i * 3 + 1] = 0.6 + t * 0.4;
      col[i * 3 + 2] = 1.0;
    }
    return { positions: pos, colors: col };
  }, [COUNT]);

  const linePositions = useMemo(
    () => new Float32Array(COUNT * 6),
    [COUNT],
  );

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      mouse.y * 0.25,
      0.04,
    );
    ref.current.rotation.z = THREE.MathUtils.lerp(
      ref.current.rotation.z,
      mouse.x * 0.15,
      0.04,
    );

    const pos = ref.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;
    for (let i = 0; i < COUNT; i++) {
      pos[i * 3 + 1] += Math.sin(time * 0.6 + i) * 0.0015;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;

    if (linesRef.current) {
      let li = 0;
      const maxLines = isCoarse ? 60 : 140;
      const maxDist = 1.4;
      let added = 0;
      for (let i = 0; i < COUNT && added < maxLines; i++) {
        for (let j = i + 1; j < COUNT && added < maxLines; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (d < maxDist) {
            linePositions[li++] = pos[i * 3];
            linePositions[li++] = pos[i * 3 + 1];
            linePositions[li++] = pos[i * 3 + 2];
            linePositions[li++] = pos[j * 3];
            linePositions[li++] = pos[j * 3 + 1];
            linePositions[li++] = pos[j * 3 + 2];
            added++;
          }
        }
      }
      for (let k = li; k < linePositions.length; k++) linePositions[k] = 0;
      linesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group>
      <points ref={ref}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          vertexColors
          transparent
          opacity={0.95}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={new THREE.Color("#3da9ff")}
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

function Scene() {
  const mouse = useRef({ x: 0, y: 0 });
  const scroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const h = window.innerHeight;
      scroll.current = Math.min(1, Math.max(0, window.scrollY / h));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame(({ pointer, camera }) => {
    mouse.current.x = pointer.x;
    mouse.current.y = pointer.y;
    const target = 6 + scroll.current * 4;
    camera.position.z += (target - camera.position.z) * 0.08;
    const ty = -scroll.current * 1.2;
    camera.position.y += (ty - camera.position.y) * 0.08;
    camera.rotation.x = -scroll.current * 0.15;
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#5ab8ff" />
      <ParticleField mouse={mouse.current} />
    </>
  );
}

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl2") || canvas.getContext("webgl"))
    );
  } catch {
    return false;
  }
}

export default function HeroScene() {
  if (typeof window === "undefined" || !hasWebGL()) {
    return <div className="absolute inset-0 gradient-radial" />;
  }
  return (
    <div className="absolute inset-0">
      <Suspense fallback={null}>
        <Canvas
          dpr={[1, 1.7]}
          camera={{ position: [0, 0, 6], fov: 65 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
