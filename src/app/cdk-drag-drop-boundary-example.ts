import { Component } from '@angular/core';

/**
 * @title Drag&Drop boundary
 */
@Component({
  selector: 'cdk-drag-drop-boundary-example',
  templateUrl: 'cdk-drag-drop-boundary-example.html',
  styleUrls: ['cdk-drag-drop-boundary-example.css'],
})
export class CdkDragDropBoundaryExample {

  items = [
    "Cockroaches", "Wasps", "Rats", "Mosquitoes", "E. Coli Bacteria"
  ]
  dragPositions = [
    { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }

  ];

  lockPosition($event: any, index: number) {
    let dragPosition = this.dragPositions[index];
    console.log($event.distance.x);
    if ($event.distance.x > 50) {
      dragPosition = { x: 0, y: 0 };
    }
    else if ($event.distance.x < -50) {
      dragPosition = { x: -100, y: 0 };

    }
    else {
      dragPosition = { x: dragPosition.x, y: dragPosition.y };
    }
    this.dragPositions[index] = dragPosition;
  }

  delete(index: number) {
    if (index !== -1) {
      this.items.splice(index, 1);
      this.resetposition();

    }
  }
  resetposition() {
    this.dragPositions = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }];
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */