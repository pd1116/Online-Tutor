// import React from 'react';

// const Search2 = () => {
//     return (
//         <form name="searchtutors" id="searchtutors" method="post" action="search_result.html">


//             <div class="row space-bottom">
//                 <h6> <strong><img src="icons/search.png" width="25" height="25" alt="" /> SEARCH FOR TUTORS</strong> </h6> Find a great tutor in your area.
//             </div>
//             <div class="row">


//                 <div class="c3" style="background:#195318; height:5px;"></div>
//                 <div class="c9" style="background:#848484; height:1px;"></div>
//             </div>

//             <div class="row space-top">



//                 <div class="c6">
//                     <font id="pre_disc">

//                         <div class="select2-container pareas" id="s2id_pareas" style="width: 100%;"><a href="javascript:void(0)" onclick="return false;" class="select2-choice" tabindex="-1">   <span class="select2-chosen" id="select2-chosen-2"> All Areas </span><abbr class="select2-search-choice-close"></abbr>   <span class="select2-arrow" role="presentation"><b role="presentation"></b></span></a><input class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-2" id="s2id_autogen2" tabindex="0"></div><select name="pareas" class="pareas select2-offscreen" id="pareas" style="width: 100%;" tabindex="-1" title="">
//                             <option value=""> All Areas </option>


//                         </select>

//                     </font>


//                 </div>

//             </div>



//             <br></br>



//             <input type="hidden" name="gender" id="gender" class="gender" />
//             <input type="hidden" name="salaryrange" id="salaryrange" class="gender" />


//             <div class="row">

//                 <div class="c6">

//                     <div class="select2-container pmediums" id="s2id_pmediums" style="width: 100%;"><a href="javascript:void(0)" onclick="return false;" class="select2-choice" tabindex="-1">   <span class="select2-chosen" id="select2-chosen-3"> Any Medium </span><abbr class="select2-search-choice-close"></abbr>   <span class="select2-arrow" role="presentation"><b role="presentation"></b></span></a><input class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-3" id="s2id_autogen3" tabindex="0" /></div><select name="pmediums" id="pmediums" class="pmediums select2-offscreen" style="width: 100%;" onchange="return showlistofclasses();" tabindex="-1" title="">
//                         <option value=""> Any Medium </option>
//                         <option value="5082014205030"> Bangla Medium </option><option value="5082014200140"> English Medium </option><option value="5082014201040"> Arabic Medium </option><option value="7062018063436"> English Version </option><option value="29082018090397"> Extra Curricular Activities </option><option value="29082018090570"> Language Learning
//                         </option><option value="29082018084547"> Computer Learning
//                         </option>         </select>


//                     <script type="text/javascript" language="javascript">
//                         {/* function showlistofclasses()
// 			{
				
// 				var ppid=document.getElementById("pmediums").value; 
				
// 				$("#show_pclasses").html("<img src='ajax-loader.gif'>");
				
// 				$.ajax({
// 				                type: 'POST',
// 								url: 'newfeatures/show_pclasses_search_bak.php',
// 								data: "ppid="+ppid,
// 								success: function(htmldata) {
//  									$("#show_pclasses").html(htmldata);
//  								}
// 							}); 
				
				
				
				
// 			} */}
//                     </script>



//                 </div>



//                 <div class="c6">
//                     <font id="show_pclasses">
//                         <div class="select2-container pclasses" id="s2id_pclasses" style="width: 100%;"><a href="javascript:void(0)" onclick="return false;" class="select2-choice" tabindex="-1">   <span class="select2-chosen" id="select2-chosen-4"> Any Class </span><abbr class="select2-search-choice-close"></abbr>   <span class="select2-arrow" role="presentation"><b role="presentation"></b></span></a><input class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-4" id="s2id_autogen4" tabindex="0"></div><select name="pclasses" id="pclasses" class="pclasses select2-offscreen" style="width: 100%;" onchange="return showlistofSubjects();" tabindex="-1" title="">
//                             <option value=""> Any Class </option>
//                             <option value="29082018089212"> Applications
//                             </option>
//                             <option value="29082018091602"> Database
//                             </option>
//                             <option value="29082018087349"> Networking
//                             </option><option value="29082018088715"> Operating System
//                             </option><option value="29082018085162"> Photo Editing
//                             </option><option value="29082018092087"> Programming
//                             </option><option value="29082018088262"> Web Design
//                             </option><option value="29082018085575">
//                             </option><option value="29082018091716"> Art/Drawing
//                             </option><option value="29082018089128"> Instrument
//                             </option><option value="29082018092158"> Music
//                             </option><option value="29082018089171"> Others
//                             </option><option value="29082018090325"> Exam(IELTS, TOFEL) </option>
//                             <option value="29082018089620"> Foreign Language
//                             </option><option value="5082014203400"> O Level </option><option value="5082014208720"> Standard I </option><option value="5082014211310"> Standard II </option><option value="5082014205520"> Standard III </option><option value="5082014205350"> Standard IV </option><option value="5082014207390"> Standard IX </option><option value="5082014207320"> Standard V </option><option value="5082014202790"> Standard VI </option><option value="5082014206420"> Standard VII </option><option value="5082014208830"> Standard VIII </option><option value="5082014202710"> Fazil </option><option value="5082014209660"> Kamil </option><option value="13112018123139"> Quran </option><option value="22112015137725"> Nursery </option><option value="5082014202990"> Class  VIII </option><option value="5082014204510"> Class I </option><option value="5082014210040"> Class II </option><option value="5082014204440"> Class III </option><option value="5082014204230"> Class IV </option><option value="5082014208630"> Class IX </option><option value="5082014209980"> Class V </option><option value="5082014202050"> Class VI </option><option value="5082014202200"> Class VII </option><option value="5082014201630"> Class X </option><option value="5082014202810"> H.S.C </option><option value="5082014204270"> S.S.C </option><option value="5082014211940"> A Level </option><option value="23112015031071"> Honors </option><option value="7062018076043"> Class I
//                             </option><option value="7062018076638"> Class II
//                             </option><option value="7062018077186"> Class III
//                             </option><option value="7062018079825"> Class IV
//                             </option><option value="7062018081807"> Class IX
//                             </option><option value="7062018074989"> Class V
//                             </option><option value="7062018078691"> Class VI
//                             </option><option value="7062018077355"> Class VII
//                             </option><option value="7062018073145"> Class VIII
//                             </option><option value="7062018078080"> Class X
//                             </option><option value="7062018076487"> Class XI (HSC)
//                             </option><option value="7062018080288"> Class XII (HSC) </option>
//                         </select>

//                     </font>

//                     <script type="text/javascript" language="javascript">
//                         {/* function showlistofSubjects()
// 			{
				
// 				var ppid=document.getElementById("pmediums").value;
// 				var pclasses_ppid=document.getElementById("pclasses").value;
				
// 				$("#show_subjects").html("<img src='ajax-loader.gif'>");
				
// 				$.ajax({
// 				                type: 'POST',
// 								url: 'newfeatures/show_psubjects_search_bak.php',
// 								data: "ppid="+ppid+"&pclasses_ppid="+pclasses_ppid,
// 								success: function(htmldata) {
//  									$("#show_subjects").html(htmldata);
//  								}
// 							}); 
				
				
				
				
// 			} */}
//                     </script>

//                 </div>


//             </div>


//             <br />


//             <div class="row">



//                 <div class="c6">

//                     <font id="show_subjects">

//                         <div class="select2-container psubjects" id="s2id_psubjects" style="width: 100%;"><a href="javascript:void(0)" onclick="return false;" class="select2-choice" tabindex="-1">   <span class="select2-chosen" id="select2-chosen-5"> All Subjects </span><abbr class="select2-search-choice-close"></abbr>   <span class="select2-arrow" role="presentation"><b role="presentation"></b></span></a><input class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-5" id="s2id_autogen5" tabindex="0"></div><select name="psubjects[]" id="psubjects" class="psubjects select2-offscreen" style="width: 100%;" tabindex="-1" title="">
//                             <option value=""> All Subjects </option>

//                             <option value="29082018086464"> 3D Design </option><option value="29082018087025"> Adobe Photoshop </option><option value="29082018088087"> Android </option><option value="29082018086293"> Android </option><option value="29082018088314"> ASP </option><option value="29082018093048"> AutoCAD </option><option value="29082018087628"> C </option><option value="29082018091703"> C# </option><option value="29082018093137"> C++ </option><option value="29082018086230"> CISCO </option><option value="29082018088446"> Flash </option><option value="29082018089315"> Illustrator </option><option value="29082018087679"> iOS </option><option value="29082018094238"> iOS </option><option value="29082018086065"> Java </option><option value="29082018086025"> Juniper </option><option value="29082018085806"> LAN </option><option value="29082018085241"> Light Room </option><option value="29082018091670"> Linux </option><option value="29082018094663"> Mobile Application </option><option value="29082018090474"> MS Access </option><option value="29082018085106"> MS Office </option><option value="29082018091082"> MS SQL </option><option value="29082018090460"> My SQL </option><option value="29082018092118"> Oracle </option><option value="29082018088136"> Other </option><option value="29082018089754"> PHP </option><option value="29082018091603"> Python </option><option value="29082018087597"> Solaries </option><option value="29082018087862"> Ubuntu </option><option value="29082018085477"> Unix </option><option value="29082018094506"> VB </option><option value="29082018089360"> Video Editing </option><option value="29082018085072"> WAN </option><option value="29082018092237"> Web Application </option><option value="29082018086368"> Website </option><option value="29082018087052"> Windows Desktop </option><option value="29082018085056"> Windows Server </option><option value="29082018098722"> Band </option><option value="29082018097212"> Body Building </option><option value="29082018094604"> Boxing </option><option value="29082018094455"> Business </option><option value="29082018092788"> Dance </option><option value="29082018095814"> Drums </option><option value="29082018096748"> Folk Music </option><option value="29082018095133"> General Drawing </option><option value="29082018095777"> General Music </option><option value="29082018087057"> Guitar </option><option value="29082018097005"> Hand Writing </option><option value="29082018092102"> Karate </option><option value="29082018090623"> Management </option><option value="29082018097947"> Modern </option><option value="29082018086288"> Oil Painting </option><option value="29082018088225"> Organ </option><option value="29082018086169"> Others </option><option value="29082018088308"> Piano </option><option value="29082018092423"> Pop </option><option value="29082018095269"> Saxophone </option><option value="29082018089914"> Trumpet </option><option value="29082018088631"> Violin </option><option value="29082018099624"> Vocal Lesson </option><option value="29082018091291"> Water Color </option><option value="29082018091631"> Yoga </option><option value="29082018092057"> Arabic </option><option value="29082018087092"> Chinese </option><option value="29082018088069"> Dutch </option><option value="29082018093108"> English </option><option value="29082018085673"> French </option><option value="29082018093816"> German </option><option value="29082018093279"> GMAT </option><option value="29082018092715"> GRE </option><option value="29082018090267"> Greek </option><option value="29082018088585"> Hindi </option><option value="29082018092539"> IELTS </option><option value="29082018089821"> Italian </option><option value="29082018093623"> Japanese </option><option value="29082018087434"> Korean </option><option value="29082018087395"> Portuguese </option><option value="29082018087897"> Russian </option><option value="29082018094987"> SAT </option><option value="29082018089946"> Spanish </option><option value="29082018094937"> Spoken English </option><option value="29082018086089"> Thai </option><option value="29082018092013"> TOFEL </option><option value="5082014220410"> Eassy Writing </option><option value="26012015236946"> Quran Reading </option><option value="5082014217380"> General Math </option><option value="27012015133068"> ICT </option><option value="22112015135533"> Multiple subjects </option><option value="11092014110100"> Religion/ Islamiat </option><option value="26012015238360"> Social Science </option><option value="22112015135783"> 2 Subjects </option><option value="22112015137094"> 3 Subjects </option><option value="22112015134671"> 4 Subjects </option><option value="22112015134909"> All Subject </option><option value="5082014215120"> Bangla </option><option value="5082014220090"> English </option><option value="5082014215500"> Math </option><option value="26012015239225"> Art </option><option value="5082014217230"> Accounting </option><option value="5082014218400"> Biology </option><option value="5082014214860"> Chemistry </option><option value="5082014216200"> Civics </option><option value="5082014216950"> Computer Science </option><option value="15102015231183"> Economics </option><option value="5082014216890"> English Literature </option><option value="5082014222860"> Finance </option><option value="16032015010910"> General Science </option><option value="5082014218230"> Higher Math </option><option value="5082014222210"> History </option><option value="5082014219930"> Islamic Studies </option><option value="5082014218940"> Law </option><option value="5082014222330"> Phsychology </option><option value="5082014219540"> Physics </option><option value="5082014222090"> Sociology </option><option value="5082014214970"> Statistics </option>         </select>

//                     </font>


//                 </div>

//                 <div class="c6 text-right">


//                     <font id="loading_subject">
//                         <button type="button" class="green medium" name="searchtut" id="searchtut" onclick="return search_tutors_simple();"> <strong>Search Tutor</strong>  </button>
//                     </font>


//                 </div>



//             </div>
//             <div className="row">
//                 <div class="c6">
//                     &nbsp; &nbsp; &gt;&gt;   <a href="Search_Tutors.html"> <strong>advanced search</strong> </a>
//                 </div>
//                 <div class="c6">
//                     &nbsp; &nbsp; &gt;&gt;   <a href="Search_Tutors.html"> <strong>advanced search</strong> </a>
//                 </div>

//             </div>

//             {/* <div className="row">
//     	<div class="c6">
//         <a href="Ask_for_Tutors.html"> Want to Get calls from Tutors ? <br> <img src="plane.png"> <strong>List your tuition.</strong>  </a>
//         </div>
        
//         <div class="c6">
//         &nbsp; &nbsp; &gt;&gt;   <a href="Search_Tutors.html"> <strong>advanced search</strong> </a> 
//         </div>
        
//     </div>       */}







//             <div class="row" style="height: 10px;"> </div>


//         </form>
//     );
// };

// export default Search2;