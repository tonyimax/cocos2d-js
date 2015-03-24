/**
 * @module cocos2dx_3d
 */
var jsb = jsb || {};

/**
 * @class Skeleton3D
 */
jsb.Skeleton3D = {

/**
 * @method removeAllBones
 */
removeAllBones : function (
)
{
},

/**
 * @method addBone
 * @param {cc.Bone3D} arg0
 */
addBone : function (
bone3d 
)
{
},

/**
 * @method getBoneByName
 * @param {String} arg0
 * @return {cc.Bone3D}
 */
getBoneByName : function (
str 
)
{
    return cc.Bone3D;
},

/**
 * @method getRootBone
 * @param {int} arg0
 * @return {cc.Bone3D}
 */
getRootBone : function (
int 
)
{
    return cc.Bone3D;
},

/**
 * @method updateBoneMatrix
 */
updateBoneMatrix : function (
)
{
},

/**
 * @method getBoneByIndex
 * @param {unsigned int} arg0
 * @return {cc.Bone3D}
 */
getBoneByIndex : function (
int 
)
{
    return cc.Bone3D;
},

/**
 * @method getRootCount
 * @return {long}
 */
getRootCount : function (
)
{
    return 0;
},

/**
 * @method getBoneIndex
 * @param {cc.Bone3D} arg0
 * @return {int}
 */
getBoneIndex : function (
bone3d 
)
{
    return 0;
},

/**
 * @method getBoneCount
 * @return {long}
 */
getBoneCount : function (
)
{
    return 0;
},

/**
 * @method Skeleton3D
 * @constructor
 */
Skeleton3D : function (
)
{
},

};

/**
 * @class Sprite3D
 */
jsb.Sprite3D = {

/**
 * @method setCullFaceEnabled
 * @param {bool} arg0
 */
setCullFaceEnabled : function (
bool 
)
{
},

/**
 * @method setTexture
* @param {cc.Texture2D|String} texture2d
*/
setTexture : function(
str 
)
{
},

/**
 * @method getLightMask
 * @return {unsigned int}
 */
getLightMask : function (
)
{
    return 0;
},

/**
 * @method createAttachSprite3DNode
 * @param {cc.NodeData} arg0
 * @param {cc.MaterialDatas} arg1
 */
createAttachSprite3DNode : function (
nodedata, 
materialdatas 
)
{
},

/**
 * @method loadFromFile
 * @param {String} arg0
 * @param {cc.NodeDatas} arg1
 * @param {cc.MeshDatas} arg2
 * @param {cc.MaterialDatas} arg3
 * @return {bool}
 */
loadFromFile : function (
str, 
nodedatas, 
meshdatas, 
materialdatas 
)
{
    return false;
},

/**
 * @method setCullFace
 * @param {unsigned int} arg0
 */
setCullFace : function (
int 
)
{
},

/**
 * @method addMesh
 * @param {cc.Mesh} arg0
 */
addMesh : function (
mesh 
)
{
},

/**
 * @method removeAllAttachNode
 */
removeAllAttachNode : function (
)
{
},

/**
 * @method genGLProgramState
 */
genGLProgramState : function (
)
{
},

/**
 * @method getMesh
 * @return {cc.Mesh}
 */
getMesh : function (
)
{
    return cc.Mesh;
},

/**
 * @method createSprite3DNode
 * @param {cc.NodeData} arg0
 * @param {cc.ModelData} arg1
 * @param {cc.MaterialDatas} arg2
 * @return {cc.Sprite3D}
 */
createSprite3DNode : function (
nodedata, 
modeldata, 
materialdatas 
)
{
    return cc.Sprite3D;
},

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method getMeshCount
 * @return {long}
 */
getMeshCount : function (
)
{
    return 0;
},

/**
 * @method onAABBDirty
 */
onAABBDirty : function (
)
{
},

/**
 * @method getMeshByIndex
 * @param {int} arg0
 * @return {cc.Mesh}
 */
getMeshByIndex : function (
int 
)
{
    return cc.Mesh;
},

/**
 * @method createNode
 * @param {cc.NodeData} arg0
 * @param {cc.Node} arg1
 * @param {cc.MaterialDatas} arg2
 * @param {bool} arg3
 */
createNode : function (
nodedata, 
node, 
materialdatas, 
bool 
)
{
},

/**
 * @method isForceDepthWrite
 * @return {bool}
 */
isForceDepthWrite : function (
)
{
    return false;
},

/**
 * @method getBlendFunc
 * @return {cc.BlendFunc}
 */
getBlendFunc : function (
)
{
    return cc.BlendFunc;
},

/**
 * @method getMeshIndexData
 * @param {String} arg0
 * @return {cc.MeshIndexData}
 */
getMeshIndexData : function (
str 
)
{
    return cc.MeshIndexData;
},

/**
 * @method removeAttachNode
 * @param {String} arg0
 */
removeAttachNode : function (
str 
)
{
},

/**
 * @method setLightMask
 * @param {unsigned int} arg0
 */
setLightMask : function (
int 
)
{
},

/**
 * @method afterAsyncLoad
 * @param {void} arg0
 */
afterAsyncLoad : function (
void 
)
{
},

/**
 * @method loadFromCache
 * @param {String} arg0
 * @return {bool}
 */
loadFromCache : function (
str 
)
{
    return false;
},

/**
 * @method initFrom
 * @param {cc.NodeDatas} arg0
 * @param {cc.MeshDatas} arg1
 * @param {cc.MaterialDatas} arg2
 * @return {bool}
 */
initFrom : function (
nodedatas, 
meshdatas, 
materialdatas 
)
{
    return false;
},

/**
 * @method getAttachNode
 * @param {String} arg0
 * @return {cc.AttachNode}
 */
getAttachNode : function (
str 
)
{
    return cc.AttachNode;
},

/**
 * @method initWithFile
 * @param {String} arg0
 * @return {bool}
 */
initWithFile : function (
str 
)
{
    return false;
},

/**
 * @method setBlendFunc
 * @param {cc.BlendFunc} arg0
 */
setBlendFunc : function (
blendfunc 
)
{
},

/**
 * @method getSkeleton
 * @return {cc.Skeleton3D}
 */
getSkeleton : function (
)
{
    return cc.Skeleton3D;
},

/**
 * @method setForceDepthWrite
 * @param {bool} arg0
 */
setForceDepthWrite : function (
bool 
)
{
},

/**
 * @method getMeshByName
 * @param {String} arg0
 * @return {cc.Mesh}
 */
getMeshByName : function (
str 
)
{
    return cc.Mesh;
},

/**
 * @method create
* @param {String|String} str
* @param {String} str
* @return {cc.Sprite3D|cc.Sprite3D|cc.Sprite3D}
*/
create : function(
str,
str 
)
{
    return cc.Sprite3D;
},

/**
 * @method Sprite3D
 * @constructor
 */
Sprite3D : function (
)
{
},

};

/**
 * @class Sprite3DCache
 */
jsb.Sprite3DCache = {

/**
 * @method removeSprite3DData
 * @param {String} arg0
 */
removeSprite3DData : function (
str 
)
{
},

/**
 * @method removeAllSprite3DData
 */
removeAllSprite3DData : function (
)
{
},

/**
 * @method destroyInstance
 */
destroyInstance : function (
)
{
},

/**
 * @method getInstance
 * @return {cc.Sprite3DCache}
 */
getInstance : function (
)
{
    return cc.Sprite3DCache;
},

};

/**
 * @class Mesh
 */
jsb.Mesh = {

/**
 * @method setTexture
* @param {cc.Texture2D|String} texture2d
*/
setTexture : function(
str 
)
{
},

/**
 * @method getTexture
 * @return {cc.Texture2D}
 */
getTexture : function (
)
{
    return cc.Texture2D;
},

/**
 * @method getSkin
 * @return {cc.MeshSkin}
 */
getSkin : function (
)
{
    return cc.MeshSkin;
},

/**
 * @method calcuateAABB
 */
calcuateAABB : function (
)
{
},

/**
 * @method getVertexSizeInBytes
 * @return {int}
 */
getVertexSizeInBytes : function (
)
{
    return 0;
},

/**
 * @method getName
 * @return {String}
 */
getName : function (
)
{
    return ;
},

/**
 * @method getIndexFormat
 * @return {unsigned int}
 */
getIndexFormat : function (
)
{
    return 0;
},

/**
 * @method getGLProgramState
 * @return {cc.GLProgramState}
 */
getGLProgramState : function (
)
{
    return cc.GLProgramState;
},

/**
 * @method getVertexBuffer
 * @return {unsigned int}
 */
getVertexBuffer : function (
)
{
    return 0;
},

/**
 * @method hasVertexAttrib
 * @param {int} arg0
 * @return {bool}
 */
hasVertexAttrib : function (
int 
)
{
    return false;
},

/**
 * @method getBlendFunc
 * @return {cc.BlendFunc}
 */
getBlendFunc : function (
)
{
    return cc.BlendFunc;
},

/**
 * @method getMeshIndexData
 * @return {cc.MeshIndexData}
 */
getMeshIndexData : function (
)
{
    return cc.MeshIndexData;
},

/**
 * @method setName
 * @param {String} arg0
 */
setName : function (
str 
)
{
},

/**
 * @method isVisible
 * @return {bool}
 */
isVisible : function (
)
{
    return false;
},

/**
 * @method getIndexCount
 * @return {long}
 */
getIndexCount : function (
)
{
    return 0;
},

/**
 * @method bindMeshCommand
 */
bindMeshCommand : function (
)
{
},

/**
 * @method setMeshIndexData
 * @param {cc.MeshIndexData} arg0
 */
setMeshIndexData : function (
meshindexdata 
)
{
},

/**
 * @method getMeshVertexAttribCount
 * @return {long}
 */
getMeshVertexAttribCount : function (
)
{
    return 0;
},

/**
 * @method setBlendFunc
 * @param {cc.BlendFunc} arg0
 */
setBlendFunc : function (
blendfunc 
)
{
},

/**
 * @method getPrimitiveType
 * @return {unsigned int}
 */
getPrimitiveType : function (
)
{
    return 0;
},

/**
 * @method setSkin
 * @param {cc.MeshSkin} arg0
 */
setSkin : function (
meshskin 
)
{
},

/**
 * @method getIndexBuffer
 * @return {unsigned int}
 */
getIndexBuffer : function (
)
{
    return 0;
},

/**
 * @method setGLProgramState
 * @param {cc.GLProgramState} arg0
 */
setGLProgramState : function (
glprogramstate 
)
{
},

/**
 * @method setVisible
 * @param {bool} arg0
 */
setVisible : function (
bool 
)
{
},

/**
 * @method Mesh
 * @constructor
 */
Mesh : function (
)
{
},

};

/**
 * @class Animation3D
 */
jsb.Animation3D = {

/**
 * @method init
 * @param {cc.Animation3DData} arg0
 * @return {bool}
 */
init : function (
animation3ddata 
)
{
    return false;
},

/**
 * @method getBoneCurveByName
 * @param {String} arg0
 * @return {cc.Animation3D::Curve}
 */
getBoneCurveByName : function (
str 
)
{
    return cc.Animation3D::Curve;
},

/**
 * @method getDuration
 * @return {float}
 */
getDuration : function (
)
{
    return 0;
},

/**
 * @method create
 * @param {String} arg0
 * @param {String} arg1
 * @return {cc.Animation3D}
 */
create : function (
str, 
str 
)
{
    return cc.Animation3D;
},

/**
 * @method Animation3D
 * @constructor
 */
Animation3D : function (
)
{
},

};

/**
 * @class Animate3D
 */
jsb.Animate3D = {

/**
 * @method getSpeed
 * @return {float}
 */
getSpeed : function (
)
{
    return 0;
},

/**
 * @method removeFromMap
 */
removeFromMap : function (
)
{
},

/**
 * @method setWeight
 * @param {float} arg0
 */
setWeight : function (
float 
)
{
},

/**
 * @method getOriginInterval
 * @return {float}
 */
getOriginInterval : function (
)
{
    return 0;
},

/**
 * @method setSpeed
 * @param {float} arg0
 */
setSpeed : function (
float 
)
{
},

/**
 * @method setOriginInterval
 * @param {float} arg0
 */
setOriginInterval : function (
float 
)
{
},

/**
 * @method getWeight
 * @return {float}
 */
getWeight : function (
)
{
    return 0;
},

/**
 * @method create
* @param {cc.Animation3D|cc.Animation3D} animation3d
* @param {float} float
* @param {float} float
* @return {cc.Animate3D|cc.Animate3D}
*/
create : function(
animation3d,
float,
float 
)
{
    return cc.Animate3D;
},

/**
 * @method getTransitionTime
 * @return {float}
 */
getTransitionTime : function (
)
{
    return 0;
},

/**
 * @method createWithFrames
 * @param {cc.Animation3D} arg0
 * @param {int} arg1
 * @param {int} arg2
 * @param {float} arg3
 * @return {cc.Animate3D}
 */
createWithFrames : function (
animation3d, 
int, 
int, 
float 
)
{
    return cc.Animate3D;
},

/**
 * @method Animate3D
 * @constructor
 */
Animate3D : function (
)
{
},

};

/**
 * @class AttachNode
 */
jsb.AttachNode = {

/**
 * @method create
 * @param {cc.Bone3D} arg0
 * @return {cc.AttachNode}
 */
create : function (
bone3d 
)
{
    return cc.AttachNode;
},

/**
 * @method AttachNode
 * @constructor
 */
AttachNode : function (
)
{
},

};

/**
 * @class BillBoard
 */
jsb.BillBoard = {

/**
 * @method getMode
 * @return {cc.BillBoard::Mode}
 */
getMode : function (
)
{
    return 0;
},

/**
 * @method visit
 * @param {cc.Renderer} arg0
 * @param {mat4_object} arg1
 * @param {unsigned int} arg2
 */
visit : function (
renderer, 
mat4, 
int 
)
{
},

/**
 * @method setMode
 * @param {cc.BillBoard::Mode} arg0
 */
setMode : function (
mode 
)
{
},

/**
 * @method create
* @param {String|cc.BillBoard::Mode|String} str
* @param {cc.BillBoard::Mode|rect_object} mode
* @param {cc.BillBoard::Mode} mode
* @return {cc.BillBoard|cc.BillBoard|cc.BillBoard}
*/
create : function(
str,
rect,
mode 
)
{
    return cc.BillBoard;
},

/**
 * @method createWithTexture
 * @param {cc.Texture2D} arg0
 * @param {cc.BillBoard::Mode} arg1
 * @return {cc.BillBoard}
 */
createWithTexture : function (
texture2d, 
mode 
)
{
    return cc.BillBoard;
},

/**
 * @method BillBoard
 * @constructor
 */
BillBoard : function (
)
{
},

};
