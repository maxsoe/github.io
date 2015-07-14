<?php

include('simplehtmldom/simple_html_dom.php');
include('incl/pclzip.lib.php');


$urltoprocess = $_POST["senturl"];

$html = file_get_html($urltoprocess);

$linkarray = array();

process($urltoprocess);

$counter = 1;
$zipfile = new PclZip('todownload/latestcbz.cbz');
$zip = new ZipArchive;

$v_list = $zipfile->create("");

foreach ($linkarray as $imageinarray){
	$path = "$imageinarray";
	
	$number = sprintf("%03d",$counter);
	$counter++;
	
	$img = 'todownload/image'.$number.'.jpg';
	file_put_contents($img, file_get_contents($path));
	
	if ($zip->open('todownload/latestcbz.cbz') === TRUE) {
	   	$zip->addFile("$img", "$img");
	    $zip->close();
	    echo ("<br/>Added $img");
	} else {
	    echo ("<br/>Failed to add $img");
	}
	unlink("$img");
}
?>
<br/>
<a href="todownload/latestcbz.cbz">Download</a>

<?php
// print_r($linkarray);

function process($url) {
	get_image($url);
	$nexturl = get_next_link($url);
	
	if ($nexturl!=null) {
		//echo "<br/>url to follow is $nexturl";
	
		global $html;
		$html = file_get_html($nexturl);
	
		process($nexturl);
	}
}

function get_image($url) {
	global $html;
	$fullimage = $html->find('[title="Show fullsized image"]');
	$imagelink = $fullimage[0]->href;
	global $linkarray;
	$linkarray[] = $imagelink;
	//echo "<br/>Image $imagelink has been put into the array <br/>";
}

function get_next_link($url) {
	global $html;
	$findnextlink = $html->find('[title="Next Image"]');
	
	if ($findnextlink == null) {
		return null;	
	} else {
		// find the domain
		preg_match('@^(?:http://)?([^/]+)@i',
	    $url, $matches);
		$host = $matches[1];
		
		// Link to follow
		$nexturl = 'http://'.$host.$findnextlink[0]->href;
		return($nexturl);
	}
}

?>
