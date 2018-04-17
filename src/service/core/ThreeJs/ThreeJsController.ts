import { IGeometryController } from "../IGeometryController";
import * as CustomFBXLoader from "../../../fbx-reader/fbxReader.js";
import { Box3D } from "../Box3D";
import { Point } from "../Point";
import * as THREE from "three";
import { CozyFS } from "../io/CozyFS";

export class ThreeJsController implements IGeometryController {

    constructor(readonly fsController: CozyFS = new CozyFS()) {

    }

    loadFrom(pathToLocalFbxFile: string): Promise<Box3D> {

        return new Promise<Box3D>((resolve, reject) => {
            let start: Point;
            let end: Point;

            this.fsController.readFile(pathToLocalFbxFile, null, (err, nb) => {

                let bufferData = nb.buffer;
                let loader = new CustomFBXLoader();
                let object3d = loader.parse(bufferData);
                let box = new THREE.Box3().setFromObject(object3d);

                start = new Point(box.min.x, box.min.y, box.min.z);
                end = new Point(box.max.x, box.max.y, box.max.z);
                let result = new Box3D(start, end);
                resolve(result);
                return result;

            });

        });
    }
}




