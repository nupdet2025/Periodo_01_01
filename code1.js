gdjs.Intro_9502Code = {};
gdjs.Intro_9502Code.localVariables = [];
gdjs.Intro_9502Code.GDIntro_9595BackgroundObjects1= [];
gdjs.Intro_9502Code.GDIntro_9595BackgroundObjects2= [];
gdjs.Intro_9502Code.GDIntro_9595BackgroundObjects3= [];
gdjs.Intro_9502Code.GDIntro_9595BackgroundObjects4= [];
gdjs.Intro_9502Code.GDIntro_9595BackgroundObjects5= [];
gdjs.Intro_9502Code.GDIntro_9595BackgroundObjects6= [];
gdjs.Intro_9502Code.GDbtn_9595jogarObjects1= [];
gdjs.Intro_9502Code.GDbtn_9595jogarObjects2= [];
gdjs.Intro_9502Code.GDbtn_9595jogarObjects3= [];
gdjs.Intro_9502Code.GDbtn_9595jogarObjects4= [];
gdjs.Intro_9502Code.GDbtn_9595jogarObjects5= [];
gdjs.Intro_9502Code.GDbtn_9595jogarObjects6= [];
gdjs.Intro_9502Code.GDpainel_959501Objects1= [];
gdjs.Intro_9502Code.GDpainel_959501Objects2= [];
gdjs.Intro_9502Code.GDpainel_959501Objects3= [];
gdjs.Intro_9502Code.GDpainel_959501Objects4= [];
gdjs.Intro_9502Code.GDpainel_959501Objects5= [];
gdjs.Intro_9502Code.GDpainel_959501Objects6= [];
gdjs.Intro_9502Code.GDbtn_9595sunObjects1= [];
gdjs.Intro_9502Code.GDbtn_9595sunObjects2= [];
gdjs.Intro_9502Code.GDbtn_9595sunObjects3= [];
gdjs.Intro_9502Code.GDbtn_9595sunObjects4= [];
gdjs.Intro_9502Code.GDbtn_9595sunObjects5= [];
gdjs.Intro_9502Code.GDbtn_9595sunObjects6= [];
gdjs.Intro_9502Code.GDbtn_9595windObjects1= [];
gdjs.Intro_9502Code.GDbtn_9595windObjects2= [];
gdjs.Intro_9502Code.GDbtn_9595windObjects3= [];
gdjs.Intro_9502Code.GDbtn_9595windObjects4= [];
gdjs.Intro_9502Code.GDbtn_9595windObjects5= [];
gdjs.Intro_9502Code.GDbtn_9595windObjects6= [];
gdjs.Intro_9502Code.GDbtn_9595snowObjects1= [];
gdjs.Intro_9502Code.GDbtn_9595snowObjects2= [];
gdjs.Intro_9502Code.GDbtn_9595snowObjects3= [];
gdjs.Intro_9502Code.GDbtn_9595snowObjects4= [];
gdjs.Intro_9502Code.GDbtn_9595snowObjects5= [];
gdjs.Intro_9502Code.GDbtn_9595snowObjects6= [];
gdjs.Intro_9502Code.GDbtn_9595rainObjects1= [];
gdjs.Intro_9502Code.GDbtn_9595rainObjects2= [];
gdjs.Intro_9502Code.GDbtn_9595rainObjects3= [];
gdjs.Intro_9502Code.GDbtn_9595rainObjects4= [];
gdjs.Intro_9502Code.GDbtn_9595rainObjects5= [];
gdjs.Intro_9502Code.GDbtn_9595rainObjects6= [];
gdjs.Intro_9502Code.GDNewSpriteObjects1= [];
gdjs.Intro_9502Code.GDNewSpriteObjects2= [];
gdjs.Intro_9502Code.GDNewSpriteObjects3= [];
gdjs.Intro_9502Code.GDNewSpriteObjects4= [];
gdjs.Intro_9502Code.GDNewSpriteObjects5= [];
gdjs.Intro_9502Code.GDNewSpriteObjects6= [];
gdjs.Intro_9502Code.GDAcertoObjects1= [];
gdjs.Intro_9502Code.GDAcertoObjects2= [];
gdjs.Intro_9502Code.GDAcertoObjects3= [];
gdjs.Intro_9502Code.GDAcertoObjects4= [];
gdjs.Intro_9502Code.GDAcertoObjects5= [];
gdjs.Intro_9502Code.GDAcertoObjects6= [];
gdjs.Intro_9502Code.GDCursorObjects1= [];
gdjs.Intro_9502Code.GDCursorObjects2= [];
gdjs.Intro_9502Code.GDCursorObjects3= [];
gdjs.Intro_9502Code.GDCursorObjects4= [];
gdjs.Intro_9502Code.GDCursorObjects5= [];
gdjs.Intro_9502Code.GDCursorObjects6= [];


gdjs.Intro_9502Code.asyncCallback15032340 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro_9502Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_snow"), gdjs.Intro_9502Code.GDbtn_9595snowObjects6);

{for(var i = 0, len = gdjs.Intro_9502Code.GDbtn_9595snowObjects6.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDbtn_9595snowObjects6[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\audios\\neve.mp3", false, 150, 1);
}{for(var i = 0, len = gdjs.Intro_9502Code.GDbtn_9595snowObjects6.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDbtn_9595snowObjects6[i].getBehavior("Scale").setScale(gdjs.Intro_9502Code.GDbtn_9595snowObjects6[i].getBehavior("Scale").getScale() + (0.1));
}
}gdjs.Intro_9502Code.localVariables.length = 0;
}
gdjs.Intro_9502Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro_9502Code.localVariables);
/* Don't save btn_snow as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Intro_9502Code.asyncCallback15032340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro_9502Code.asyncCallback11903044 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro_9502Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_wind"), gdjs.Intro_9502Code.GDbtn_9595windObjects5);

{for(var i = 0, len = gdjs.Intro_9502Code.GDbtn_9595windObjects5.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDbtn_9595windObjects5[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\audios\\vento.mp3", false, 150, 1);
}{for(var i = 0, len = gdjs.Intro_9502Code.GDbtn_9595windObjects5.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDbtn_9595windObjects5[i].getBehavior("Scale").setScale(gdjs.Intro_9502Code.GDbtn_9595windObjects5[i].getBehavior("Scale").getScale() + (0.1));
}
}
{ //Subevents
gdjs.Intro_9502Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Intro_9502Code.localVariables.length = 0;
}
gdjs.Intro_9502Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro_9502Code.localVariables);
/* Don't save btn_snow as it will be provided by the parent asyncObjectsList. */
/* Don't save btn_wind as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Intro_9502Code.asyncCallback11903044(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro_9502Code.asyncCallback15021148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro_9502Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_rain"), gdjs.Intro_9502Code.GDbtn_9595rainObjects4);

{for(var i = 0, len = gdjs.Intro_9502Code.GDbtn_9595rainObjects4.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDbtn_9595rainObjects4[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\audios\\chuva.mp3", false, 150, 1);
}{for(var i = 0, len = gdjs.Intro_9502Code.GDbtn_9595rainObjects4.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDbtn_9595rainObjects4[i].getBehavior("Scale").setScale(gdjs.Intro_9502Code.GDbtn_9595rainObjects4[i].getBehavior("Scale").getScale() + (0.1));
}
}
{ //Subevents
gdjs.Intro_9502Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Intro_9502Code.localVariables.length = 0;
}
gdjs.Intro_9502Code.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro_9502Code.localVariables);
/* Don't save btn_rain as it will be provided by the parent asyncObjectsList. */
/* Don't save btn_snow as it will be provided by the parent asyncObjectsList. */
/* Don't save btn_wind as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Intro_9502Code.asyncCallback15021148(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro_9502Code.asyncCallback15040588 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro_9502Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_sun"), gdjs.Intro_9502Code.GDbtn_9595sunObjects3);

{for(var i = 0, len = gdjs.Intro_9502Code.GDbtn_9595sunObjects3.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDbtn_9595sunObjects3[i].getBehavior("Scale").setScale(gdjs.Intro_9502Code.GDbtn_9595sunObjects3[i].getBehavior("Scale").getScale() + (0.1));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\audios\\sol.mp3", false, 150, 1);
}{for(var i = 0, len = gdjs.Intro_9502Code.GDbtn_9595sunObjects3.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDbtn_9595sunObjects3[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{ //Subevents
gdjs.Intro_9502Code.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Intro_9502Code.localVariables.length = 0;
}
gdjs.Intro_9502Code.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro_9502Code.localVariables);
/* Don't save btn_rain as it will be provided by the parent asyncObjectsList. */
/* Don't save btn_snow as it will be provided by the parent asyncObjectsList. */
/* Don't save btn_sun as it will be provided by the parent asyncObjectsList. */
/* Don't save btn_wind as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(11), (runtimeScene) => (gdjs.Intro_9502Code.asyncCallback15040588(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro_9502Code.asyncCallback14647884 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro_9502Code.localVariables);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audios\\instrucao.mp3", 2, false, 150, 1);
}
{ //Subevents
gdjs.Intro_9502Code.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Intro_9502Code.localVariables.length = 0;
}
gdjs.Intro_9502Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro_9502Code.localVariables);
for (const obj of gdjs.Intro_9502Code.GDbtn_9595rainObjects1) asyncObjectsList.addObject("btn_rain", obj);
for (const obj of gdjs.Intro_9502Code.GDbtn_9595snowObjects1) asyncObjectsList.addObject("btn_snow", obj);
for (const obj of gdjs.Intro_9502Code.GDbtn_9595sunObjects1) asyncObjectsList.addObject("btn_sun", obj);
for (const obj of gdjs.Intro_9502Code.GDbtn_9595windObjects1) asyncObjectsList.addObject("btn_wind", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Intro_9502Code.asyncCallback14647884(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro_9502Code.asyncCallback19265308 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro_9502Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena_01", false);
}gdjs.Intro_9502Code.localVariables.length = 0;
}
gdjs.Intro_9502Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro_9502Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Intro_9502Code.asyncCallback19265308(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro_9502Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Intro_9502Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Intro_9502Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDCursorObjects1[i].hide();
}
}{gdjs.evtsExt__PauseFocusLost__Active.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Intro_9502Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Intro_9502Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Intro_9502Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDCursorObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("btn_rain"), gdjs.Intro_9502Code.GDbtn_9595rainObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_snow"), gdjs.Intro_9502Code.GDbtn_9595snowObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_sun"), gdjs.Intro_9502Code.GDbtn_9595sunObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_wind"), gdjs.Intro_9502Code.GDbtn_9595windObjects1);
{for(var i = 0, len = gdjs.Intro_9502Code.GDbtn_9595sunObjects1.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDbtn_9595sunObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Intro_9502Code.GDbtn_9595rainObjects1.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDbtn_9595rainObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Intro_9502Code.GDbtn_9595windObjects1.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDbtn_9595windObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Intro_9502Code.GDbtn_9595snowObjects1.length ;i < len;++i) {
    gdjs.Intro_9502Code.GDbtn_9595snowObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
{ //Subevents
gdjs.Intro_9502Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_jogar"), gdjs.Intro_9502Code.GDbtn_9595jogarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Intro_9502Code.GDbtn_9595jogarObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9502Code.GDbtn_9595jogarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9502Code.GDbtn_9595jogarObjects1[k] = gdjs.Intro_9502Code.GDbtn_9595jogarObjects1[i];
        ++k;
    }
}
gdjs.Intro_9502Code.GDbtn_9595jogarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 60, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}
{ //Subevents
gdjs.Intro_9502Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Intro_9502Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Intro_9502Code.GDIntro_9595BackgroundObjects1.length = 0;
gdjs.Intro_9502Code.GDIntro_9595BackgroundObjects2.length = 0;
gdjs.Intro_9502Code.GDIntro_9595BackgroundObjects3.length = 0;
gdjs.Intro_9502Code.GDIntro_9595BackgroundObjects4.length = 0;
gdjs.Intro_9502Code.GDIntro_9595BackgroundObjects5.length = 0;
gdjs.Intro_9502Code.GDIntro_9595BackgroundObjects6.length = 0;
gdjs.Intro_9502Code.GDbtn_9595jogarObjects1.length = 0;
gdjs.Intro_9502Code.GDbtn_9595jogarObjects2.length = 0;
gdjs.Intro_9502Code.GDbtn_9595jogarObjects3.length = 0;
gdjs.Intro_9502Code.GDbtn_9595jogarObjects4.length = 0;
gdjs.Intro_9502Code.GDbtn_9595jogarObjects5.length = 0;
gdjs.Intro_9502Code.GDbtn_9595jogarObjects6.length = 0;
gdjs.Intro_9502Code.GDpainel_959501Objects1.length = 0;
gdjs.Intro_9502Code.GDpainel_959501Objects2.length = 0;
gdjs.Intro_9502Code.GDpainel_959501Objects3.length = 0;
gdjs.Intro_9502Code.GDpainel_959501Objects4.length = 0;
gdjs.Intro_9502Code.GDpainel_959501Objects5.length = 0;
gdjs.Intro_9502Code.GDpainel_959501Objects6.length = 0;
gdjs.Intro_9502Code.GDbtn_9595sunObjects1.length = 0;
gdjs.Intro_9502Code.GDbtn_9595sunObjects2.length = 0;
gdjs.Intro_9502Code.GDbtn_9595sunObjects3.length = 0;
gdjs.Intro_9502Code.GDbtn_9595sunObjects4.length = 0;
gdjs.Intro_9502Code.GDbtn_9595sunObjects5.length = 0;
gdjs.Intro_9502Code.GDbtn_9595sunObjects6.length = 0;
gdjs.Intro_9502Code.GDbtn_9595windObjects1.length = 0;
gdjs.Intro_9502Code.GDbtn_9595windObjects2.length = 0;
gdjs.Intro_9502Code.GDbtn_9595windObjects3.length = 0;
gdjs.Intro_9502Code.GDbtn_9595windObjects4.length = 0;
gdjs.Intro_9502Code.GDbtn_9595windObjects5.length = 0;
gdjs.Intro_9502Code.GDbtn_9595windObjects6.length = 0;
gdjs.Intro_9502Code.GDbtn_9595snowObjects1.length = 0;
gdjs.Intro_9502Code.GDbtn_9595snowObjects2.length = 0;
gdjs.Intro_9502Code.GDbtn_9595snowObjects3.length = 0;
gdjs.Intro_9502Code.GDbtn_9595snowObjects4.length = 0;
gdjs.Intro_9502Code.GDbtn_9595snowObjects5.length = 0;
gdjs.Intro_9502Code.GDbtn_9595snowObjects6.length = 0;
gdjs.Intro_9502Code.GDbtn_9595rainObjects1.length = 0;
gdjs.Intro_9502Code.GDbtn_9595rainObjects2.length = 0;
gdjs.Intro_9502Code.GDbtn_9595rainObjects3.length = 0;
gdjs.Intro_9502Code.GDbtn_9595rainObjects4.length = 0;
gdjs.Intro_9502Code.GDbtn_9595rainObjects5.length = 0;
gdjs.Intro_9502Code.GDbtn_9595rainObjects6.length = 0;
gdjs.Intro_9502Code.GDNewSpriteObjects1.length = 0;
gdjs.Intro_9502Code.GDNewSpriteObjects2.length = 0;
gdjs.Intro_9502Code.GDNewSpriteObjects3.length = 0;
gdjs.Intro_9502Code.GDNewSpriteObjects4.length = 0;
gdjs.Intro_9502Code.GDNewSpriteObjects5.length = 0;
gdjs.Intro_9502Code.GDNewSpriteObjects6.length = 0;
gdjs.Intro_9502Code.GDAcertoObjects1.length = 0;
gdjs.Intro_9502Code.GDAcertoObjects2.length = 0;
gdjs.Intro_9502Code.GDAcertoObjects3.length = 0;
gdjs.Intro_9502Code.GDAcertoObjects4.length = 0;
gdjs.Intro_9502Code.GDAcertoObjects5.length = 0;
gdjs.Intro_9502Code.GDAcertoObjects6.length = 0;
gdjs.Intro_9502Code.GDCursorObjects1.length = 0;
gdjs.Intro_9502Code.GDCursorObjects2.length = 0;
gdjs.Intro_9502Code.GDCursorObjects3.length = 0;
gdjs.Intro_9502Code.GDCursorObjects4.length = 0;
gdjs.Intro_9502Code.GDCursorObjects5.length = 0;
gdjs.Intro_9502Code.GDCursorObjects6.length = 0;

gdjs.Intro_9502Code.eventsList6(runtimeScene);
gdjs.Intro_9502Code.GDIntro_9595BackgroundObjects1.length = 0;
gdjs.Intro_9502Code.GDIntro_9595BackgroundObjects2.length = 0;
gdjs.Intro_9502Code.GDIntro_9595BackgroundObjects3.length = 0;
gdjs.Intro_9502Code.GDIntro_9595BackgroundObjects4.length = 0;
gdjs.Intro_9502Code.GDIntro_9595BackgroundObjects5.length = 0;
gdjs.Intro_9502Code.GDIntro_9595BackgroundObjects6.length = 0;
gdjs.Intro_9502Code.GDbtn_9595jogarObjects1.length = 0;
gdjs.Intro_9502Code.GDbtn_9595jogarObjects2.length = 0;
gdjs.Intro_9502Code.GDbtn_9595jogarObjects3.length = 0;
gdjs.Intro_9502Code.GDbtn_9595jogarObjects4.length = 0;
gdjs.Intro_9502Code.GDbtn_9595jogarObjects5.length = 0;
gdjs.Intro_9502Code.GDbtn_9595jogarObjects6.length = 0;
gdjs.Intro_9502Code.GDpainel_959501Objects1.length = 0;
gdjs.Intro_9502Code.GDpainel_959501Objects2.length = 0;
gdjs.Intro_9502Code.GDpainel_959501Objects3.length = 0;
gdjs.Intro_9502Code.GDpainel_959501Objects4.length = 0;
gdjs.Intro_9502Code.GDpainel_959501Objects5.length = 0;
gdjs.Intro_9502Code.GDpainel_959501Objects6.length = 0;
gdjs.Intro_9502Code.GDbtn_9595sunObjects1.length = 0;
gdjs.Intro_9502Code.GDbtn_9595sunObjects2.length = 0;
gdjs.Intro_9502Code.GDbtn_9595sunObjects3.length = 0;
gdjs.Intro_9502Code.GDbtn_9595sunObjects4.length = 0;
gdjs.Intro_9502Code.GDbtn_9595sunObjects5.length = 0;
gdjs.Intro_9502Code.GDbtn_9595sunObjects6.length = 0;
gdjs.Intro_9502Code.GDbtn_9595windObjects1.length = 0;
gdjs.Intro_9502Code.GDbtn_9595windObjects2.length = 0;
gdjs.Intro_9502Code.GDbtn_9595windObjects3.length = 0;
gdjs.Intro_9502Code.GDbtn_9595windObjects4.length = 0;
gdjs.Intro_9502Code.GDbtn_9595windObjects5.length = 0;
gdjs.Intro_9502Code.GDbtn_9595windObjects6.length = 0;
gdjs.Intro_9502Code.GDbtn_9595snowObjects1.length = 0;
gdjs.Intro_9502Code.GDbtn_9595snowObjects2.length = 0;
gdjs.Intro_9502Code.GDbtn_9595snowObjects3.length = 0;
gdjs.Intro_9502Code.GDbtn_9595snowObjects4.length = 0;
gdjs.Intro_9502Code.GDbtn_9595snowObjects5.length = 0;
gdjs.Intro_9502Code.GDbtn_9595snowObjects6.length = 0;
gdjs.Intro_9502Code.GDbtn_9595rainObjects1.length = 0;
gdjs.Intro_9502Code.GDbtn_9595rainObjects2.length = 0;
gdjs.Intro_9502Code.GDbtn_9595rainObjects3.length = 0;
gdjs.Intro_9502Code.GDbtn_9595rainObjects4.length = 0;
gdjs.Intro_9502Code.GDbtn_9595rainObjects5.length = 0;
gdjs.Intro_9502Code.GDbtn_9595rainObjects6.length = 0;
gdjs.Intro_9502Code.GDNewSpriteObjects1.length = 0;
gdjs.Intro_9502Code.GDNewSpriteObjects2.length = 0;
gdjs.Intro_9502Code.GDNewSpriteObjects3.length = 0;
gdjs.Intro_9502Code.GDNewSpriteObjects4.length = 0;
gdjs.Intro_9502Code.GDNewSpriteObjects5.length = 0;
gdjs.Intro_9502Code.GDNewSpriteObjects6.length = 0;
gdjs.Intro_9502Code.GDAcertoObjects1.length = 0;
gdjs.Intro_9502Code.GDAcertoObjects2.length = 0;
gdjs.Intro_9502Code.GDAcertoObjects3.length = 0;
gdjs.Intro_9502Code.GDAcertoObjects4.length = 0;
gdjs.Intro_9502Code.GDAcertoObjects5.length = 0;
gdjs.Intro_9502Code.GDAcertoObjects6.length = 0;
gdjs.Intro_9502Code.GDCursorObjects1.length = 0;
gdjs.Intro_9502Code.GDCursorObjects2.length = 0;
gdjs.Intro_9502Code.GDCursorObjects3.length = 0;
gdjs.Intro_9502Code.GDCursorObjects4.length = 0;
gdjs.Intro_9502Code.GDCursorObjects5.length = 0;
gdjs.Intro_9502Code.GDCursorObjects6.length = 0;


return;

}

gdjs['Intro_9502Code'] = gdjs.Intro_9502Code;
