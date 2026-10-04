function ee_banner(ee_yourehere)
{
// the ad begin
adcode='';
if (document.all) {adcode='<iframe src="http://a.tribalfusion.com/f.ad?site=EchoEchoCom&adSpace=ROS&requestID=700097228" width=468 height=60 marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scrolling=no><scri'+'pt language=javascript> randNum = ((new Date()).getTime() % 2147483648) + Math.random(); document.write("<a href=\'http://a.tribalfusion.com/i.click?site=EchoEchoCom&adSpace=ROS&requestID=" + randNum + "\' target=_blank >"+"<img src=\'http://a.tribalfusion.com/i.ad?site=EchoEchoCom&adSpace=ROS&requestID=" + randNum + "\'" +"width=468 height=60 border=0 alt=\'Click Here\'></a>");</scr'+'ipt><noscript><a href="http://a.tribalfusion.com/i.click?site=EchoEchoCom&adSpace=ROS&requestID=700097228" target=_blank ><img src="http://a.tribalfusion.com/i.ad?site=EchoEchoCom&adSpace=ROS&requestID=700097228" width=468 height=60 border=0 alt="Click Here"></a> </noscript></iframe>';}
else {adcode='<a href="http://a.tribalfusion.com/i.click?site=EchoEchoCom&adSpace=ROS&size=468x60&requestID=1624718691"><img src="http://a.tribalfusion.com/i.ad?site=EchoEchoCom&adSpace=ROS&size=468x60&requestID=1624718691" width="468" height="60" border="0"></a>'}
// the ad end

i=parseInt(Math.random()*17)+1;
adcode='<a href="http://www.echoechoplus.com/" target="_blank"><img src="http://echoecho.com/advertisers/ee'+i+'.gif" width="468" height="60" border="0" alt="Web Hosting - As Reliable As It Gets!"></a>';

document.write('<form name="searchform" method="get" action="http://echoecho.master.com/texis/master/search/" target="_top">');
document.write('<table width="750" cellpadding="0" cellspacing="0" border="0"><tr><td><table width="750" cellpadding="1" cellspacing="0" border="0"><tr><td class="toplinks">&nbsp;&nbsp;&nbsp;<a href="linktous.htm" style="text-decoration:none;">Link To Us</a> | Bookmark EchoEcho.Com</td><td class="toplinks" align="right"><a href="http://forum.echoechoplus.com/forumdisplay.php?s=&forumid=46" style="text-decoration:none;">What\'s New?</a> | <a href="http://www.echoecho.com/sitemap.htm" style="text-decoration:none;">Site Map</a>&nbsp;&nbsp;&nbsp;</td></tr></table></td></tr></table>');
document.write('<table width="750" cellpadding="1" cellspacing="0" border="0"><tr><td class="b1"><a href="http://www.echoecho.com" target="_top"><img src="http://www.echoecho.com/logo.gif" alt="EchoEcho.Com Homepage" border="0" width="274" height="60"></a><br></td><td class="b1"><img src="http://www.echoecho.com/p.gif" width="2" height="1">');
document.write(adcode+'<img src="http://www.echoecho.com/p.gif" width="2" height="1"><br></td></tr></table>');


document.write('<table width="750" cellpadding="2" cellspacing="0" border="0"><tr><td class="b1">');
document.write('<table width="100%" cellpadding="0" cellspacing="0" border="0">');
document.write('<tr><td class="yourehere" nowrap="nowrap" valign="middle">');
document.write('&nbsp;&nbsp;&nbsp;<a href="http://www.echoecho.com/index.html" target="_top">Home</a> &gt; '+ee_yourehere);
document.write('</td>');
document.write('<td align="right" class="toplinks" nowrap="nowrap" valign="top">');
document.write('<input type="hidden" name="db" value="sites/echoecho.com" />');
document.write('<table border="0" cellspacing="0" cellpadding="0">');
document.write('<tr align="center" valign="middle"><td align="right" valign="top"><b class="toplinks">Search</b>&nbsp;</td><td align="left"><input name="query" type="text" value="" class="search" /></td><td>&nbsp;<input type="submit" name="action" value=" Go! " class="search" /></td></tr>');
document.write('</table>');
document.write('</td></tr>');
document.write('</table>');
document.write('</td></tr></table>');
document.write('</form>');
}



function ee_flags(ee_section)
{
document.write('<table width="750" border="0" cellspacing="0" cellpadding="0"><tr valign="top"><td width="23"></td><td colspan="17" class="b1"><img src="http://www.echoecho.com/p.gif" alt="" width="1" height="2" /></td></tr><tr valign="top"><td width="23"><img src="http://www.echoecho.com/p.gif" alt="" width="23" height="1" /><br /></td><td width="1" class="b1"><img src="http://www.echoecho.com/p.gif" alt="" width="1" height="1" /></td>');
var ee_flag_links=new Array('Forums','http://forum.echoechoplus.com/','D-Zine Articles','dzine.htm','Tutorials','school.htm','Online Tools','tools.htm','Free Resources','free.htm','References','documentation.htm','Quiz','quiz.htm','Hosting','hosting.htm');
for (var i=0; i<ee_flag_links.length; i=i+2){
var ee_flag_class="flags";
if ( (ee_section=='ubb' && i==0) || (ee_section=='dzine' && i==2) || (ee_section=='tutorials' && i==4) || (ee_section=='tools' && i==6) || (ee_section=='resources' && i==8) || (ee_section=='documentation' && i==10) || (ee_section=='quiz' && i==12)  || (ee_section=='hosting' && i==14))
{ee_flag_class="aflags";}
document.write('<td nowrap="nowrap" class="'+ee_flag_class+'"><a href="'+ee_flag_links[i+1]+'" target="_top">&nbsp;'+ee_flag_links[i]+'&nbsp;</a></td><td width="1" class="b1"><img src="http://www.echoecho.com/p.gif" alt="" width="2" height="8" /><br /></td>');
}
document.write('<td width="100%"></td></tr>');


document.write('<tr><td colspan="2" width="24" class="b1"><img src="http://www.echoecho.com/p.gif" alt="" width="24" height="2" /></td>');
for (var i=0; i<ee_flag_links.length; i=i+2){
var ee_flag_class="b1";
if ( (ee_section=='ubb' && i==0) || (ee_section=='dzine' && i==2) || (ee_section=='tutorials' && i==4) || (ee_section=='tools' && i==6) || (ee_section=='resources' && i==8) || (ee_section=='documentation' && i==10) || (ee_section=='quiz' && i==12) || (ee_section=='hosting' && i==14) )
{ee_flag_class="aflags";}
document.write('<td class="'+ee_flag_class+'"><img src="http://www.echoecho.com/p.gif" alt="" width="1" height="1" /></td><td width="1" class="b1"><img src="http://www.echoecho.com/p.gif" alt="" width="2" height="2" /><br /></td>');
}
document.write('<td class="b1"><img src="http://www.echoecho.com/p.gif" alt="" width="1" height="1" /></td></tr></table>');
}

function ee_top_border()
{
document.write('<table width="750" border="0" cellspacing="0" cellpadding="0"><tr valign="top"><td width="1" class="b1"><img src="http://www.echoecho.com/p.gif" alt="" width="1" height="1" /><br /></td><td width="19" class="b2"><img src="http://www.echoecho.com/p.gif" alt="" width="19" height="1" /><br /></td>');
document.write('<td width="728" class="b2"><img src="http://www.echoecho.com/p.gif" alt="" width="728" height="1" /><br /></td>');
document.write('<td width="2" class="b1"><img src="http://www.echoecho.com/p.gif" alt="" width="2" height="8" /><br /></td></tr></table>');
}



function ee_top_divider()
{
document.write('<table width="750" border="0" cellspacing="0" cellpadding="0"><tr valign="top"><td width="1" class="b1"><img src="http://www.echoecho.com/p.gif" alt="" width="1" height="1" /><br /></td><td width="19" class="b2"><img src="http://www.echoecho.com/p.gif" alt="" width="19" height="1" /><br /></td><td width="730" class="b1"><img src="http://www.echoecho.com/p.gif" alt="" width="730" height="1" /><br /></td></tr></table>');
}

function ee_hosting(){
document.write('<table bgcolor="#000000" cellpadding="0" cellspacing="1" align="center"><tr><td bgcolor="#000000">');
document.write('<table cellspacing="0" cellpadding="3">');
document.write('<tr><td align="center" bgcolor="#8c2839"><a href="http://www.echoechoplus.com" style="text-decoration:none;"><font face="arial" size="1" color="#ffffff"><b>ECHOECHO+ HOSTING - 5000 MB SERVER SPACE AND 60 GB TRAFFIC</b></font></a></td></tr>');
document.write('<tr><td align="center" bgcolor="#ffffff"><font face="arial" size="1" color="#000000">FORUMS &amp; SCRIPTS, PHP, MYSQL, PERL, PASSWORD FOLDERS, VISITOR STATS</font></td></tr>');
document.write('<tr><td align="right" bgcolor="#ff9900"><font face="arial" size="1" color="#000000"><b>ONLY $7.50/MONTH</b> &nbsp; &nbsp; &nbsp; &gt;&gt;</font><a href="http://www.echoechoplus.com"><font face="arial" size="1" color="#000000"><b>READ MORE</b></font></a></td></tr>');
document.write('</table></td></tr></table><br>');
}

function ee_top(ee_section,ee_yourehere)
{
ee_banner(ee_yourehere);
//document.write('_<br>');
ee_hosting();
ee_flags(ee_section);
ee_top_border();
ee_top_divider();
}












function ee_end_divider()
{
document.write('<table width="750" border="0" cellspacing="0" cellpadding="0"><tr valign="top"><td width="750" class="b1"><img src="http://www.echoecho.com/p.gif" alt="" width="750" height="1" /><br /></td></tr></table>');
}


function ee_blackbox()
{
document.write('<table width="750" cellpadding="0" cellspacing="0" border="0">');
document.write('<tr><td height="25" class="blackbox" nowrap="nowrap"><img src="http://www.echoecho.com/p.gif" alt="" width="20" height="1" /><b>On EchoEcho: </b>');
document.write('<a href="http://forum.echoechoplus.com/" target="_top"><b>User Forums</b></a> | ');
document.write('<a href="http://www.echoecho.com/dzine.htm" target="_top"><b>D-Zine Articles</b></a> | ');
document.write('<a href="http://www.echoecho.com/school.htm" target="_top"><b>Tutorials</b></a> | ');
document.write('<a href="http://www.echoecho.com/tools.htm" target="_top"><b>Online Tools</b></a> | ');
document.write('<a href="http://www.echoecho.com/free.htm" target="_top"><b>Free Resources</b></a> | ');
document.write('<a href="http://www.echoecho.com/documentation.htm" target="_top"><b>References</b></a> | ');
document.write('<a href="http://www.echoecho.com/quiz.htm" target="_top"><b>Quiz</b></a> | ');
document.write('<a href="http://www.echoecho.com/hosting.htm" target="_top"><b>Hosting</b></a>');
document.write('</td>');
document.write('<td align="right" class="blackbox"><a href="http://www.echoecho.com/about.htm" target="_top">About EchoEcho</a>&nbsp;&nbsp;</td></tr>');
document.write('</table>');
}

function ee_end_snippet()
{
document.write('<img src="http://www.echoecho.com/p.gif" alt="" width="1" height="3" /><br />');
document.write('<table width="750" cellpadding="0" cellspacing="0" border="0"><tr><td class="bottomlinks">');
document.write('<a href="http://www.echoecho.com/contact.htm" target="_top">Contact us</a> | ');
document.write('<a href="http://www.echoecho.com/advertise.htm" target="_top">Advertise info</a> | ');
document.write('<a href="http://www.echoecho.com/termsofuse.htm" target="_top">Terms of use</a> | ');
document.write('<a href="http://www.echoecho.com/privacy.htm" target="_top">Privacy policy</a>');
document.write('</td><td align="right" class="bottomlinks" target="_top">');
document.write('<a href="http://www.echoecho.com/legal.htm" target="_top">Copyright</a> &copy; 1999-2002 <a href="http://www.netkontoret.dk" target="_top">NetKontoret</a> All rights reserved.');
document.write('</td></tr></table>');
}

function ee_bottom()
{
ee_end_divider()
ee_blackbox()
ee_end_snippet()
}
