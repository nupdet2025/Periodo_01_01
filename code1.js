gdjs.Cena_9501Code = {};
gdjs.Cena_9501Code.localVariables = [];
gdjs.Cena_9501Code.GDpainel_959501Objects1= [];
gdjs.Cena_9501Code.GDpainel_959501Objects2= [];
gdjs.Cena_9501Code.GDpainel_959501Objects3= [];
gdjs.Cena_9501Code.GDText_9595InstrucaoObjects1= [];
gdjs.Cena_9501Code.GDText_9595InstrucaoObjects2= [];
gdjs.Cena_9501Code.GDText_9595InstrucaoObjects3= [];
gdjs.Cena_9501Code.GDbtn_9595comecarObjects1= [];
gdjs.Cena_9501Code.GDbtn_9595comecarObjects2= [];
gdjs.Cena_9501Code.GDbtn_9595comecarObjects3= [];
gdjs.Cena_9501Code.GDbtn_9595certoObjects1= [];
gdjs.Cena_9501Code.GDbtn_9595certoObjects2= [];
gdjs.Cena_9501Code.GDbtn_9595certoObjects3= [];
gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1= [];
gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects2= [];
gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects3= [];
gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1= [];
gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects2= [];
gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects3= [];
gdjs.Cena_9501Code.GDbtn_9595nextObjects1= [];
gdjs.Cena_9501Code.GDbtn_9595nextObjects2= [];
gdjs.Cena_9501Code.GDbtn_9595nextObjects3= [];
gdjs.Cena_9501Code.GDbtn_9595beforeObjects1= [];
gdjs.Cena_9501Code.GDbtn_9595beforeObjects2= [];
gdjs.Cena_9501Code.GDbtn_9595beforeObjects3= [];
gdjs.Cena_9501Code.GDbackgroundObjects1= [];
gdjs.Cena_9501Code.GDbackgroundObjects2= [];
gdjs.Cena_9501Code.GDbackgroundObjects3= [];
gdjs.Cena_9501Code.GDbtn_9595sunObjects1= [];
gdjs.Cena_9501Code.GDbtn_9595sunObjects2= [];
gdjs.Cena_9501Code.GDbtn_9595sunObjects3= [];
gdjs.Cena_9501Code.GDbtn_9595windObjects1= [];
gdjs.Cena_9501Code.GDbtn_9595windObjects2= [];
gdjs.Cena_9501Code.GDbtn_9595windObjects3= [];
gdjs.Cena_9501Code.GDbtn_9595rainObjects1= [];
gdjs.Cena_9501Code.GDbtn_9595rainObjects2= [];
gdjs.Cena_9501Code.GDbtn_9595rainObjects3= [];
gdjs.Cena_9501Code.GDbtn_9595snowObjects1= [];
gdjs.Cena_9501Code.GDbtn_9595snowObjects2= [];
gdjs.Cena_9501Code.GDbtn_9595snowObjects3= [];
gdjs.Cena_9501Code.GDlabel_959501Objects1= [];
gdjs.Cena_9501Code.GDlabel_959501Objects2= [];
gdjs.Cena_9501Code.GDlabel_959501Objects3= [];
gdjs.Cena_9501Code.GDAcertoObjects1= [];
gdjs.Cena_9501Code.GDAcertoObjects2= [];
gdjs.Cena_9501Code.GDAcertoObjects3= [];
gdjs.Cena_9501Code.GDCursorObjects1= [];
gdjs.Cena_9501Code.GDCursorObjects2= [];
gdjs.Cena_9501Code.GDCursorObjects3= [];


gdjs.Cena_9501Code.asyncCallback13033468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.Cena_9501Code.GDbackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("btn_rain"), gdjs.Cena_9501Code.GDbtn_9595rainObjects2);
gdjs.copyArray(runtimeScene.getObjects("btn_snow"), gdjs.Cena_9501Code.GDbtn_9595snowObjects2);
gdjs.copyArray(runtimeScene.getObjects("btn_sun"), gdjs.Cena_9501Code.GDbtn_9595sunObjects2);
gdjs.copyArray(runtimeScene.getObjects("btn_wind"), gdjs.Cena_9501Code.GDbtn_9595windObjects2);
gdjs.copyArray(runtimeScene.getObjects("label_01"), gdjs.Cena_9501Code.GDlabel_959501Objects2);
{for(var i = 0, len = gdjs.Cena_9501Code.GDlabel_959501Objects2.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDlabel_959501Objects2[i].hide(false);
}
for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595sunObjects2.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595sunObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595rainObjects2.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595rainObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595windObjects2.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595windObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595snowObjects2.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595snowObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbackgroundObjects2[i].setTexture("assets\\background_cena_02.jpg", runtimeScene);
}
}gdjs.Cena_9501Code.localVariables.length = 0;
}
gdjs.Cena_9501Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Cena_9501Code.asyncCallback13033468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9501Code.asyncCallback13035268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_01"), gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects2);

{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects2.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}gdjs.Cena_9501Code.localVariables.length = 0;
}
gdjs.Cena_9501Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);
for (const obj of gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1) asyncObjectsList.addObject("btn_errado_01", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Cena_9501Code.asyncCallback13035268(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9501Code.mapOfGDgdjs_9546Cena_95959501Code_9546GDbtn_95959595windObjects1Objects = Hashtable.newFrom({"btn_wind": gdjs.Cena_9501Code.GDbtn_9595windObjects1});
gdjs.Cena_9501Code.asyncCallback13037620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_wind"), gdjs.Cena_9501Code.GDbtn_9595windObjects2);

{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595windObjects2.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595windObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}gdjs.Cena_9501Code.localVariables.length = 0;
}
gdjs.Cena_9501Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);
for (const obj of gdjs.Cena_9501Code.GDbtn_9595windObjects1) asyncObjectsList.addObject("btn_wind", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Cena_9501Code.asyncCallback13037620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9501Code.mapOfGDgdjs_9546Cena_95959501Code_9546GDbtn_95959595sunObjects1Objects = Hashtable.newFrom({"btn_sun": gdjs.Cena_9501Code.GDbtn_9595sunObjects1});
gdjs.Cena_9501Code.asyncCallback13040212 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.Cena_9501Code.GDbackgroundObjects3);
gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Cena_9501Code.GDbtn_9595nextObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("btn_rain"), gdjs.Cena_9501Code.GDbtn_9595rainObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("btn_snow"), gdjs.Cena_9501Code.GDbtn_9595snowObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("btn_sun"), gdjs.Cena_9501Code.GDbtn_9595sunObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("btn_wind"), gdjs.Cena_9501Code.GDbtn_9595windObjects3);

gdjs.copyArray(runtimeScene.getObjects("label_01"), gdjs.Cena_9501Code.GDlabel_959501Objects3);
{for(var i = 0, len = gdjs.Cena_9501Code.GDlabel_959501Objects3.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDlabel_959501Objects3[i].hide();
}
for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595sunObjects3.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595sunObjects3[i].hide();
}
for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595rainObjects3.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595rainObjects3[i].hide();
}
for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595windObjects3.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595windObjects3[i].hide();
}
for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595snowObjects3.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595snowObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbackgroundObjects3.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbackgroundObjects3[i].setTexture("assets\\background_01.jpg", runtimeScene);
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595nextObjects3.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595nextObjects3[i].hide(false);
}
}gdjs.Cena_9501Code.localVariables.length = 0;
}
gdjs.Cena_9501Code.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);
/* Don't save btn_rain as it will be provided by the parent asyncObjectsList. */
/* Don't save btn_snow as it will be provided by the parent asyncObjectsList. */
/* Don't save btn_sun as it will be provided by the parent asyncObjectsList. */
/* Don't save btn_wind as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Cena_9501Code.asyncCallback13040212(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9501Code.asyncCallback13040140 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);

{ //Subevents
gdjs.Cena_9501Code.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Cena_9501Code.localVariables.length = 0;
}
gdjs.Cena_9501Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);
for (const obj of gdjs.Cena_9501Code.GDbtn_9595rainObjects1) asyncObjectsList.addObject("btn_rain", obj);
for (const obj of gdjs.Cena_9501Code.GDbtn_9595snowObjects1) asyncObjectsList.addObject("btn_snow", obj);
for (const obj of gdjs.Cena_9501Code.GDbtn_9595sunObjects1) asyncObjectsList.addObject("btn_sun", obj);
for (const obj of gdjs.Cena_9501Code.GDbtn_9595windObjects1) asyncObjectsList.addObject("btn_wind", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Cena_9501Code.asyncCallback13040140(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9501Code.asyncCallback13041404 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena_02", false);
}gdjs.Cena_9501Code.localVariables.length = 0;
}
gdjs.Cena_9501Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Cena_9501Code.asyncCallback13041404(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9501Code.asyncCallback13041988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}gdjs.Cena_9501Code.localVariables.length = 0;
}
gdjs.Cena_9501Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Cena_9501Code.asyncCallback13041988(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9501Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Cena_9501Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Cena_9501Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDCursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Cena_9501Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Cena_9501Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Cena_9501Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDCursorObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Acerto"), gdjs.Cena_9501Code.GDAcertoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Cena_9501Code.GDbtn_9595nextObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_rain"), gdjs.Cena_9501Code.GDbtn_9595rainObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_snow"), gdjs.Cena_9501Code.GDbtn_9595snowObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_sun"), gdjs.Cena_9501Code.GDbtn_9595sunObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_wind"), gdjs.Cena_9501Code.GDbtn_9595windObjects1);
{for(var i = 0, len = gdjs.Cena_9501Code.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDAcertoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDAcertoObjects1[i].stopEmission();
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595nextObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595nextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595sunObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595sunObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595windObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595windObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595rainObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595rainObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595snowObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595snowObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text_Instrucao"), gdjs.Cena_9501Code.GDText_9595InstrucaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_before"), gdjs.Cena_9501Code.GDbtn_9595beforeObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_comecar"), gdjs.Cena_9501Code.GDbtn_9595comecarObjects1);
gdjs.copyArray(runtimeScene.getObjects("painel_01"), gdjs.Cena_9501Code.GDpainel_959501Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDpainel_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDpainel_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDpainel_959501Objects1[k] = gdjs.Cena_9501Code.GDpainel_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDpainel_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDText_9595InstrucaoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDText_9595InstrucaoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDText_9595InstrucaoObjects1[k] = gdjs.Cena_9501Code.GDText_9595InstrucaoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDText_9595InstrucaoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595comecarObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595comecarObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595comecarObjects1[k] = gdjs.Cena_9501Code.GDbtn_9595comecarObjects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595comecarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595beforeObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595beforeObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595beforeObjects1[k] = gdjs.Cena_9501Code.GDbtn_9595beforeObjects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595beforeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595comecarObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595comecarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595comecarObjects1[k] = gdjs.Cena_9501Code.GDbtn_9595comecarObjects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595comecarObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_9501Code.GDText_9595InstrucaoObjects1 */
/* Reuse gdjs.Cena_9501Code.GDbtn_9595beforeObjects1 */
/* Reuse gdjs.Cena_9501Code.GDbtn_9595comecarObjects1 */
/* Reuse gdjs.Cena_9501Code.GDpainel_959501Objects1 */
{for(var i = 0, len = gdjs.Cena_9501Code.GDpainel_959501Objects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDpainel_959501Objects1[i].hide();
}
for(var i = 0, len = gdjs.Cena_9501Code.GDText_9595InstrucaoObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDText_9595InstrucaoObjects1[i].hide();
}
for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595comecarObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595comecarObjects1[i].hide();
}
for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595beforeObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595beforeObjects1[i].hide();
}
}{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "Cena", "Effect", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Cena_9501Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1[k] = gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.2, 5, 5, 5, 0.008, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{ //Subevents
gdjs.Cena_9501Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_wind"), gdjs.Cena_9501Code.GDbtn_9595windObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.Cena_9501Code.mapOfGDgdjs_9546Cena_95959501Code_9546GDbtn_95959595windObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = runtimeScene.getOnceTriggers().triggerOnce(12338068);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_9501Code.GDbtn_9595windObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595windObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595windObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.2, 5, 5, 5, 0.008, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595windObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595windObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{ //Subevents
gdjs.Cena_9501Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_sun"), gdjs.Cena_9501Code.GDbtn_9595sunObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595sunObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595sunObjects1[i].getVariableBoolean(gdjs.Cena_9501Code.GDbtn_9595sunObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_1 = true;
        gdjs.Cena_9501Code.GDbtn_9595sunObjects1[k] = gdjs.Cena_9501Code.GDbtn_9595sunObjects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595sunObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.Cena_9501Code.mapOfGDgdjs_9546Cena_95959501Code_9546GDbtn_95959595sunObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Acerto"), gdjs.Cena_9501Code.GDAcertoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_rain"), gdjs.Cena_9501Code.GDbtn_9595rainObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_snow"), gdjs.Cena_9501Code.GDbtn_9595snowObjects1);
/* Reuse gdjs.Cena_9501Code.GDbtn_9595sunObjects1 */
gdjs.copyArray(runtimeScene.getObjects("btn_wind"), gdjs.Cena_9501Code.GDbtn_9595windObjects1);
{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595sunObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595sunObjects1[i].returnVariable(gdjs.Cena_9501Code.GDbtn_9595sunObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595windObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595windObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595rainObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595rainObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595snowObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595snowObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_hit_dice.mp3", false, 300, 1);
}{for(var i = 0, len = gdjs.Cena_9501Code.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDAcertoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595sunObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595sunObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDAcertoObjects1[i].startEmission();
}
}
{ //Subevents
gdjs.Cena_9501Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Cena_9501Code.GDbtn_9595nextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595nextObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595nextObjects1[k] = gdjs.Cena_9501Code.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595nextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595nextObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595nextObjects1[k] = gdjs.Cena_9501Code.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595nextObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Cena_9501Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text_Instrucao"), gdjs.Cena_9501Code.GDText_9595InstrucaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_before"), gdjs.Cena_9501Code.GDbtn_9595beforeObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_comecar"), gdjs.Cena_9501Code.GDbtn_9595comecarObjects1);
gdjs.copyArray(runtimeScene.getObjects("painel_01"), gdjs.Cena_9501Code.GDpainel_959501Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDpainel_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDpainel_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDpainel_959501Objects1[k] = gdjs.Cena_9501Code.GDpainel_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDpainel_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDText_9595InstrucaoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDText_9595InstrucaoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDText_9595InstrucaoObjects1[k] = gdjs.Cena_9501Code.GDText_9595InstrucaoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDText_9595InstrucaoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595comecarObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595comecarObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595comecarObjects1[k] = gdjs.Cena_9501Code.GDbtn_9595comecarObjects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595comecarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595beforeObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595beforeObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595beforeObjects1[k] = gdjs.Cena_9501Code.GDbtn_9595beforeObjects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595beforeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595beforeObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595beforeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595beforeObjects1[k] = gdjs.Cena_9501Code.GDbtn_9595beforeObjects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595beforeObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Cena_9501Code.eventsList6(runtimeScene);} //End of subevents
}

}


};

gdjs.Cena_9501Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cena_9501Code.GDpainel_959501Objects1.length = 0;
gdjs.Cena_9501Code.GDpainel_959501Objects2.length = 0;
gdjs.Cena_9501Code.GDpainel_959501Objects3.length = 0;
gdjs.Cena_9501Code.GDText_9595InstrucaoObjects1.length = 0;
gdjs.Cena_9501Code.GDText_9595InstrucaoObjects2.length = 0;
gdjs.Cena_9501Code.GDText_9595InstrucaoObjects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595comecarObjects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595comecarObjects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595comecarObjects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595certoObjects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595certoObjects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595certoObjects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595nextObjects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595nextObjects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595nextObjects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595beforeObjects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595beforeObjects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595beforeObjects3.length = 0;
gdjs.Cena_9501Code.GDbackgroundObjects1.length = 0;
gdjs.Cena_9501Code.GDbackgroundObjects2.length = 0;
gdjs.Cena_9501Code.GDbackgroundObjects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595sunObjects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595sunObjects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595sunObjects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595windObjects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595windObjects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595windObjects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595rainObjects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595rainObjects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595rainObjects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595snowObjects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595snowObjects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595snowObjects3.length = 0;
gdjs.Cena_9501Code.GDlabel_959501Objects1.length = 0;
gdjs.Cena_9501Code.GDlabel_959501Objects2.length = 0;
gdjs.Cena_9501Code.GDlabel_959501Objects3.length = 0;
gdjs.Cena_9501Code.GDAcertoObjects1.length = 0;
gdjs.Cena_9501Code.GDAcertoObjects2.length = 0;
gdjs.Cena_9501Code.GDAcertoObjects3.length = 0;
gdjs.Cena_9501Code.GDCursorObjects1.length = 0;
gdjs.Cena_9501Code.GDCursorObjects2.length = 0;
gdjs.Cena_9501Code.GDCursorObjects3.length = 0;

gdjs.Cena_9501Code.eventsList7(runtimeScene);
gdjs.Cena_9501Code.GDpainel_959501Objects1.length = 0;
gdjs.Cena_9501Code.GDpainel_959501Objects2.length = 0;
gdjs.Cena_9501Code.GDpainel_959501Objects3.length = 0;
gdjs.Cena_9501Code.GDText_9595InstrucaoObjects1.length = 0;
gdjs.Cena_9501Code.GDText_9595InstrucaoObjects2.length = 0;
gdjs.Cena_9501Code.GDText_9595InstrucaoObjects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595comecarObjects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595comecarObjects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595comecarObjects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595certoObjects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595certoObjects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595certoObjects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595nextObjects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595nextObjects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595nextObjects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595beforeObjects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595beforeObjects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595beforeObjects3.length = 0;
gdjs.Cena_9501Code.GDbackgroundObjects1.length = 0;
gdjs.Cena_9501Code.GDbackgroundObjects2.length = 0;
gdjs.Cena_9501Code.GDbackgroundObjects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595sunObjects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595sunObjects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595sunObjects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595windObjects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595windObjects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595windObjects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595rainObjects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595rainObjects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595rainObjects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595snowObjects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595snowObjects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595snowObjects3.length = 0;
gdjs.Cena_9501Code.GDlabel_959501Objects1.length = 0;
gdjs.Cena_9501Code.GDlabel_959501Objects2.length = 0;
gdjs.Cena_9501Code.GDlabel_959501Objects3.length = 0;
gdjs.Cena_9501Code.GDAcertoObjects1.length = 0;
gdjs.Cena_9501Code.GDAcertoObjects2.length = 0;
gdjs.Cena_9501Code.GDAcertoObjects3.length = 0;
gdjs.Cena_9501Code.GDCursorObjects1.length = 0;
gdjs.Cena_9501Code.GDCursorObjects2.length = 0;
gdjs.Cena_9501Code.GDCursorObjects3.length = 0;


return;

}

gdjs['Cena_9501Code'] = gdjs.Cena_9501Code;
