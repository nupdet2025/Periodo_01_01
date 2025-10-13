gdjs.Intro_9501Code = {};
gdjs.Intro_9501Code.localVariables = [];
gdjs.Intro_9501Code.GDIntro_9595BackgroundObjects1= [];
gdjs.Intro_9501Code.GDIntro_9595BackgroundObjects2= [];
gdjs.Intro_9501Code.GDbtn_9595jogarObjects1= [];
gdjs.Intro_9501Code.GDbtn_9595jogarObjects2= [];
gdjs.Intro_9501Code.GDpainel_959501Objects1= [];
gdjs.Intro_9501Code.GDpainel_959501Objects2= [];
gdjs.Intro_9501Code.GDAcertoObjects1= [];
gdjs.Intro_9501Code.GDAcertoObjects2= [];
gdjs.Intro_9501Code.GDCursorObjects1= [];
gdjs.Intro_9501Code.GDCursorObjects2= [];


gdjs.Intro_9501Code.asyncCallback14693028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro_9501Code.localVariables);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audios\\Voz_1.mp3", 2, false, 100, 1);
}gdjs.Intro_9501Code.localVariables.length = 0;
}
gdjs.Intro_9501Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro_9501Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Intro_9501Code.asyncCallback14693028(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro_9501Code.asyncCallback14695340 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro_9501Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro_02", false);
}gdjs.Intro_9501Code.localVariables.length = 0;
}
gdjs.Intro_9501Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro_9501Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Intro_9501Code.asyncCallback14695340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro_9501Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Intro_9501Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Intro_9501Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Intro_9501Code.GDCursorObjects1[i].hide();
}
}{gdjs.evtsExt__PauseFocusLost__Active.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Intro_9501Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Intro_9501Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Intro_9501Code.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Intro_9501Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Intro_9501Code.GDCursorObjects1[i].hide(false);
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
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\bgm_music.mp3", 1, true, 20, 1);
}
{ //Subevents
gdjs.Intro_9501Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_jogar"), gdjs.Intro_9501Code.GDbtn_9595jogarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Intro_9501Code.GDbtn_9595jogarObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9501Code.GDbtn_9595jogarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9501Code.GDbtn_9595jogarObjects1[k] = gdjs.Intro_9501Code.GDbtn_9595jogarObjects1[i];
        ++k;
    }
}
gdjs.Intro_9501Code.GDbtn_9595jogarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 60, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}
{ //Subevents
gdjs.Intro_9501Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Intro_9501Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Intro_9501Code.GDIntro_9595BackgroundObjects1.length = 0;
gdjs.Intro_9501Code.GDIntro_9595BackgroundObjects2.length = 0;
gdjs.Intro_9501Code.GDbtn_9595jogarObjects1.length = 0;
gdjs.Intro_9501Code.GDbtn_9595jogarObjects2.length = 0;
gdjs.Intro_9501Code.GDpainel_959501Objects1.length = 0;
gdjs.Intro_9501Code.GDpainel_959501Objects2.length = 0;
gdjs.Intro_9501Code.GDAcertoObjects1.length = 0;
gdjs.Intro_9501Code.GDAcertoObjects2.length = 0;
gdjs.Intro_9501Code.GDCursorObjects1.length = 0;
gdjs.Intro_9501Code.GDCursorObjects2.length = 0;

gdjs.Intro_9501Code.eventsList2(runtimeScene);
gdjs.Intro_9501Code.GDIntro_9595BackgroundObjects1.length = 0;
gdjs.Intro_9501Code.GDIntro_9595BackgroundObjects2.length = 0;
gdjs.Intro_9501Code.GDbtn_9595jogarObjects1.length = 0;
gdjs.Intro_9501Code.GDbtn_9595jogarObjects2.length = 0;
gdjs.Intro_9501Code.GDpainel_959501Objects1.length = 0;
gdjs.Intro_9501Code.GDpainel_959501Objects2.length = 0;
gdjs.Intro_9501Code.GDAcertoObjects1.length = 0;
gdjs.Intro_9501Code.GDAcertoObjects2.length = 0;
gdjs.Intro_9501Code.GDCursorObjects1.length = 0;
gdjs.Intro_9501Code.GDCursorObjects2.length = 0;


return;

}

gdjs['Intro_9501Code'] = gdjs.Intro_9501Code;
