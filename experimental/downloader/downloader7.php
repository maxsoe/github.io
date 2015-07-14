<?php

include('simplehtmldom/simple_html_dom.php');
include('incl/pclzip.lib.php');

echo "Staring downloader Version 7";
$urltoprocess = $_POST["senturl"];

echo "<br>Processing URL $urltoprocess";

$html = file_get_html($urltoprocess);

$counter = 1;
$archive = new PclZip('todownload/latestcbz.cbz');
$v_list = $archive->create("");
if ($v_list == 0) {
	die("Error : ".$archive->errorInfo(true));
}

$print_array = serialize($v_list);
echo "<br> The zip file $print_array is being created";

process($urltoprocess);

?>
<br/>
<a href="todownload/latestcbz.cbz">Download</a>
<?php

function process($url) {
/* 	$html = file_get_html($url); */

	echo "<br> Processing $url";

	$image_to_download = get_image($url);
	global $counter;
	$counter = sprintf('%03d', $counter);
	$saved_image = "$counter.jpg";
	$counter++;
	save_from_url("$image_to_download","$saved_image");
	global $archive;
	echo "<br>Calling Function: Attempting to add $saved_image to archive";
	add_to_zip($saved_image, $archive);
	
	$nexturl = get_next_link($url);
	
	echo "<br>Next URL is $nexturl";

	
	if ($nexturl!=null) {
		//echo "<br/>url to follow is $nexturl";
		global $html;
		$html = file_get_html($nexturl);
		process($nexturl);
	}
}

function get_image($url) {
	global $html;
	$fullimage = $html->getElementById('single_picture');
	$imageURL = $fullimage->src;
	echo "<br> $fullimage";
	echo "<br> Image's URL is $imageURL"; 
	return $imageURL;
}

function save_from_url($inPath,$outPath) { 
	//Download images from remote server
    $in=    fopen($inPath, "rb");
    $out=   fopen($outPath, "wb");
    while ($chunk = fread($in,8192))
    {
        fwrite($out, $chunk, 8192);
    }
    fclose($in);
    fclose($out);
}
 
function add_to_zip ($image, $file) {
	echo "<br>Function: Attempting to add $image to archive";
	$file->add("$image");
	unlink("$image"); //deletes the image from the server after it has been added to the archive
	
}

function get_next_link($url) {
	global $html;
	$findnextlink = $html->getElementById('next');
	unset($html);
	if ($findnextlink == null) {
		return null;
		unset ($findnextlink);	
	} else {
		// find the domain
		preg_match('@^(?:http://)?([^/]+)@i',
	    $url, $matches);
		$host = $matches[1];
		
		// Link to follow
		$nextlink = $findnextlink->href;
		$nexturl = 'http://'.$host.$nextlink.'#/size/original';
		return($nexturl);
		unset ($findnextlink);
		unset ($nexturl);
		unset ($host);
	}
}

?>
