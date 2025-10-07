gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.GDIntro_9595BackgroundObjects1= [];
gdjs.IntroCode.GDIntro_9595BackgroundObjects2= [];
gdjs.IntroCode.GDbtn_9595jogarObjects1= [];
gdjs.IntroCode.GDbtn_9595jogarObjects2= [];
gdjs.IntroCode.GDpainel_959501Objects1= [];
gdjs.IntroCode.GDpainel_959501Objects2= [];
gdjs.IntroCode.GDAcertoObjects1= [];
gdjs.IntroCode.GDAcertoObjects2= [];
gdjs.IntroCode.GDCursorObjects1= [];
gdjs.IntroCode.GDCursorObjects2= [];


gdjs.IntroCode.asyncCallback10631604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audios\\Voz_1.mp3", 2, false, 100, 1);
}gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.IntroCode.asyncCallback10631604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.IntroCode.asyncCallback11884660 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena_01", false);
}gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.IntroCode.asyncCallback11884660(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.IntroCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.IntroCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDCursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.IntroCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.IntroCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDCursorObjects1[i].hide(false);
}
}{gdjs.evtsExt__PauseFocusLost__Active.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
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
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\bgm_music.mp3", 1, true, 40, 1);
}
{ //Subevents
gdjs.IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_jogar"), gdjs.IntroCode.GDbtn_9595jogarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDbtn_9595jogarObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDbtn_9595jogarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDbtn_9595jogarObjects1[k] = gdjs.IntroCode.GDbtn_9595jogarObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDbtn_9595jogarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}
{ //Subevents
gdjs.IntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDIntro_9595BackgroundObjects1.length = 0;
gdjs.IntroCode.GDIntro_9595BackgroundObjects2.length = 0;
gdjs.IntroCode.GDbtn_9595jogarObjects1.length = 0;
gdjs.IntroCode.GDbtn_9595jogarObjects2.length = 0;
gdjs.IntroCode.GDpainel_959501Objects1.length = 0;
gdjs.IntroCode.GDpainel_959501Objects2.length = 0;
gdjs.IntroCode.GDAcertoObjects1.length = 0;
gdjs.IntroCode.GDAcertoObjects2.length = 0;
gdjs.IntroCode.GDCursorObjects1.length = 0;
gdjs.IntroCode.GDCursorObjects2.length = 0;

gdjs.IntroCode.eventsList2(runtimeScene);
gdjs.IntroCode.GDIntro_9595BackgroundObjects1.length = 0;
gdjs.IntroCode.GDIntro_9595BackgroundObjects2.length = 0;
gdjs.IntroCode.GDbtn_9595jogarObjects1.length = 0;
gdjs.IntroCode.GDbtn_9595jogarObjects2.length = 0;
gdjs.IntroCode.GDpainel_959501Objects1.length = 0;
gdjs.IntroCode.GDpainel_959501Objects2.length = 0;
gdjs.IntroCode.GDAcertoObjects1.length = 0;
gdjs.IntroCode.GDAcertoObjects2.length = 0;
gdjs.IntroCode.GDCursorObjects1.length = 0;
gdjs.IntroCode.GDCursorObjects2.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
