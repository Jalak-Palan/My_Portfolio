"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function NetworkGlobe() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const W = mountRef.current.clientWidth
    const H = mountRef.current.clientHeight

    // ── Renderer ──────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(window.devicePixelRatio)
    mountRef.current.appendChild(renderer.domElement)

    // ── Scene / Camera ────────────────────────────────────────
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 1000)
    camera.position.z = 3.5

    // ── Globe parameters ──────────────────────────────
    const RADIUS = 1.05
    const DOT_COUNT = 300
    const CONNECT_DIST = 0.55 // max distance to draw an edge

    // ── Generate points evenly on a sphere (Fibonacci lattice) ─
    const points: THREE.Vector3[] = []
    const golden = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < DOT_COUNT; i++) {
      const y = 1 - (i / (DOT_COUNT - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const theta = golden * i
      points.push(
        new THREE.Vector3(
          Math.cos(theta) * r * RADIUS,
          y * RADIUS,
          Math.sin(theta) * r * RADIUS
        )
      )
    }

    // ── Dots (instanced) ─────────────────────────────────────
    const dotGeo = new THREE.SphereGeometry(0.0097, 6, 6)
    const dotMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24 }) // Amber/Gold
    const dotMesh = new THREE.InstancedMesh(dotGeo, dotMat, DOT_COUNT)
    const dummy = new THREE.Object3D()
    points.forEach((p, i) => {
      dummy.position.copy(p)
      dummy.updateMatrix()
      dotMesh.setMatrixAt(i, dummy.matrix)
    })
    dotMesh.instanceMatrix.needsUpdate = true

    // ── Edges ─────────────────────────────────────────────────
    const linePositions: number[] = []
    for (let i = 0; i < DOT_COUNT; i++) {
      for (let j = i + 1; j < DOT_COUNT; j++) {
        if (points[i].distanceTo(points[j]) < CONNECT_DIST) {
          linePositions.push(
            points[i].x, points[i].y, points[i].z,
            points[j].x, points[j].y, points[j].z
          )
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    )
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xf59e0b, // Amber
      transparent: true,
      opacity: 0.25,
    })

    const group = new THREE.Group()
    group.add(dotMesh)
    group.add(new THREE.LineSegments(lineGeo, lineMat))
    scene.add(group)

    // ── Animation ─────────────────────────────────────────────
    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)
      group.rotation.y += 0.003
      group.rotation.x += 0.0005
      renderer.render(scene, camera)
    }
    animate()

    // ── Resize handler ────────────────────────────────────────
    const onResize = () => {
      if (!mountRef.current) return
      const w = mountRef.current.clientWidth
      const h = mountRef.current.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", onResize)
      renderer.dispose()
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 flex items-center justify-center opacity-60"
    />
  )
}
