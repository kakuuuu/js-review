import { ATTR, TEXT, REPLACE, REMOVE } from './patchTypes.js'
let patches = {

};
let vnIndex = 0;

function domDiff(oldVDom, newVDom) {
  let index = 0;
  vNodeWalk(oldVDom, newVDom, index);
  return patches;
}

function vNodeWalk(oldNode, newNode, index) {
  let vnPatch = [];
  if (!newNode) {
    vnPatch.push({
      type: REMOVE,
      index: index
    })
  } else if (typeof oldNode === "string" && typeof newNode === "string") {
    if (oldNode !== newNode) {
      vnPatch.push({ type: TEXT, text: newNode })
    }
  } else if (oldNode.type === newNode.type) {
    const attrPatch = attrsWalk(oldNode.props, newNode.props);
    if (Object.keys(attrPatch).length > 0) {
      vnPatch.push({ type: ATTR, attrs: attrPatch });
    }
    childrenWalk(oldNode.children, newNode.children);
  } else {
    vnPatch.push({
      type: REPLACE,
      newNode
    })
  }

  if (vnPatch.length > 0) {
    patches[index] = vnPatch
  }

}

function attrsWalk(oldAttrs, newAttrs) {
  let attrPatch = {};
  for (let key in oldAttrs) {
    if (oldAttrs[key] != newAttrs[key]) {
      attrPatch[key] = newAttrs[key];
    }
  }
  for (let key in newAttrs) {
    if (!oldAttrs.hasOwnProperty(key)) {
      attrPatch[key] = newAttrs[key];
    }
  }
  return attrPatch;
}

function childrenWalk(oldChildren, newChildren) {
  // console.log(oldChildren);
  oldChildren.map((c, idx) => {
    vNodeWalk(c, newChildren[idx], ++vnIndex);
  })

}


export default domDiff;