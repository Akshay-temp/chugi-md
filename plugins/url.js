const Jsl_0x49fc79=Jsl_0x1930;(function(_0x283064,_0x5359ec){const _0x2c96a5=Jsl_0x1930,_0x5f077c=_0x283064();while(!![]){try{const _0xd5198=-parseInt(_0x2c96a5(0xa9))/0x1*(-parseInt(_0x2c96a5(0x97))/0x2)+parseInt(_0x2c96a5(0xa8))/0x3+parseInt(_0x2c96a5(0xa2))/0x4*(parseInt(_0x2c96a5(0xaa))/0x5)+-parseInt(_0x2c96a5(0x8a))/0x6+parseInt(_0x2c96a5(0xa3))/0x7*(-parseInt(_0x2c96a5(0xa0))/0x8)+parseInt(_0x2c96a5(0x8d))/0x9*(parseInt(_0x2c96a5(0x9e))/0xa)+parseInt(_0x2c96a5(0x86))/0xb;if(_0xd5198===_0x5359ec)break;else _0x5f077c['push'](_0x5f077c['shift']());}catch(_0x6a2373){_0x5f077c['push'](_0x5f077c['shift']());}}}(Jsl_0x43c1,0xf00e4));function Jsl_0x43c1(){const _0x569f10=['../lib/','client','downloadMediaMessage','output.mp4','_Failed\x20to\x20upload\x20file!_','url','duration','320eyrYaO','jid','reply','end','image','-map\x200:a','sendMessage','3110netlvQ','url\x20?(.*)','88eSeimj','reply_message','8yPPYxa','661528FcMoic','misc','imgbb-uploader','_Reply\x20to\x20image|video|audio|sticker_','audio','2121810RrahcV','1466suOPtb','490505hXHkWG','abu-bot','_Audio\x20too\x20large.\x20Try\x20below\x2090\x20seconds!_','[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]','1501181bgHqgy','outputOptions','../config','sticker','6849828sPnqxy','Uploads\x20image\x20to\x20imgur.com','save','54693TagNeD','video','link'];Jsl_0x43c1=function(){return _0x569f10;};return Jsl_0x43c1();}function Jsl_0x1930(_0x28f790,_0x1c8b0c){const _0x43c198=Jsl_0x43c1();return Jsl_0x1930=function(_0x193029,_0x1e6b73){_0x193029=_0x193029-0x84;let _0x371b07=_0x43c198[_0x193029];return _0x371b07;},Jsl_0x1930(_0x28f790,_0x1c8b0c);}const {IMGBB_KEY}=require(Jsl_0x49fc79(0x88));async function webpUpload(_0x4a920d){return new Promise(async _0x5eee3d=>{const _0x4b31ef=Jsl_0x1930,_0x4111f0=require(_0x4b31ef(0xa5));for(let _0x46c9b5 of IMGBB_KEY){const _0x52befa={'apiKey':_0x46c9b5,'imagePath':_0x4a920d};var _0x200143=await _0x4111f0(_0x52befa);if(_0x200143['url'])return _0x5eee3d(_0x200143[_0x4b31ef(0x95)]);}});}const {Module,isPublic}=require(Jsl_0x49fc79(0x90)),ffmpeg=require('fluent-ffmpeg'),{upload}=require(Jsl_0x49fc79(0xab));Module({'pattern':Jsl_0x49fc79(0x9f),'fromMe':isPublic,'type':Jsl_0x49fc79(0xa4),'desc':Jsl_0x49fc79(0x8b)},async _0x4a64b6=>{const _0x41e180=Jsl_0x49fc79;if(_0x4a64b6[_0x41e180(0xa1)][_0x41e180(0x89)])return await _0x4a64b6[_0x41e180(0x91)][_0x41e180(0x9d)](_0x4a64b6[_0x41e180(0x98)],{'text':'_'+await webpUpload(await _0x4a64b6[_0x41e180(0xa1)][_0x41e180(0x92)]())+'_'},{'quoted':_0x4a64b6});else{if(_0x4a64b6['reply_message'][_0x41e180(0xa7)]){if(_0x4a64b6[_0x41e180(0xa1)][_0x41e180(0x96)]>0x5a)return await _0x4a64b6['client'][_0x41e180(0x9d)](_0x4a64b6[_0x41e180(0x98)],{'text':_0x41e180(0x84)},{'quoted':_0x4a64b6});var _0xd4c31c=await _0x4a64b6['reply_message'][_0x41e180(0x92)]();ffmpeg(_0xd4c31c)[_0x41e180(0x87)](['-y','-filter_complex',_0x41e180(0x85),'-map','[vid]',_0x41e180(0x9c)])[_0x41e180(0x8c)](_0x41e180(0x93))['on'](_0x41e180(0x9a),async()=>{const _0x15cebf=_0x41e180;try{var _0x14ad89=await upload(_0x15cebf(0x93));}catch{return await _0x4a64b6[_0x15cebf(0x91)][_0x15cebf(0x9d)](_0x4a64b6['jid'],{'text':'_Failed\x20to\x20upload\x20file!_'},{'quoted':_0x4a64b6});}return await _0x4a64b6[_0x15cebf(0x91)][_0x15cebf(0x9d)](_0x4a64b6[_0x15cebf(0x98)],{'text':'_'+_0x14ad89[_0x15cebf(0x8f)]+'_'},{'quoted':_0x4a64b6});});}else{if(_0x4a64b6[_0x41e180(0xa1)][_0x41e180(0x9b)]||_0x4a64b6[_0x41e180(0xa1)][_0x41e180(0x8e)])try{await _0x4a64b6[_0x41e180(0x91)][_0x41e180(0x9d)](_0x4a64b6[_0x41e180(0x98)],{'text':'_'+(await upload(await _0x4a64b6[_0x41e180(0xa1)][_0x41e180(0x92)]()))[_0x41e180(0x8f)]+'_'},{'quoted':_0x4a64b6});}catch{return await _0x4a64b6[_0x41e180(0x91)][_0x41e180(0x9d)](_0x4a64b6[_0x41e180(0x98)],{'text':_0x41e180(0x94)},{'quoted':_0x4a64b6});}else return await _0x4a64b6[_0x41e180(0x99)](_0x41e180(0xa6));}}});