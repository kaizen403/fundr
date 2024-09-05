declare module "three/examples/jsm/loaders/FBXLoader" {
  import { Loader, LoadingManager, Group } from "three";

  export class FBXLoader extends Loader {
    constructor(manager?: LoadingManager);
    load(
      url: string,
      onLoad: (object: Group) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void,
    ): void;
    parse(data: ArrayBuffer | string, path: string): Group;
  }
}
declare module "three";

declare module "three/examples/jsm/controls/OrbitControls" {
  import { Camera, MOUSE, TOUCH, Vector3 } from "three";

  export class OrbitControls {
    constructor(object: Camera, domElement?: HTMLElement);

    object: Camera;
    domElement: HTMLElement | Document;

    enabled: boolean;
    target: Vector3;

    minDistance: number;
    maxDistance: number;

    minZoom: number;
    maxZoom: number;

    minPolarAngle: number;
    maxPolarAngle: number;

    minAzimuthAngle: number;
    maxAzimuthAngle: number;

    enableDamping: boolean;
    dampingFactor: number;

    enableZoom: boolean;
    zoomSpeed: number;

    enableRotate: boolean;
    rotateSpeed: number;

    enablePan: boolean;
    panSpeed: number;
    screenSpacePanning: boolean;
    keyPanSpeed: number;

    autoRotate: boolean;
    autoRotateSpeed: number;

    enableKeys: boolean;
    keys: { LEFT: number; UP: number; RIGHT: number; BOTTOM: number };

    mouseButtons: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE };
    touches: { ONE: TOUCH; TWO: TOUCH };

    update(): boolean;
    saveState(): void;
    reset(): void;
    dispose(): void;
    getPolarAngle(): number;
    getAzimuthalAngle(): number;

    addEventListener(type: string, listener: (event: any) => void): void;
    hasEventListener(type: string, listener: (event: any) => void): boolean;
    removeEventListener(type: string, listener: (event: any) => void): void;
    dispatchEvent(event: { type: string; target: any }): void;
  }
}
