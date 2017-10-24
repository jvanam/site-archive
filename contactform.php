<!DOCTYPE html>
	<html>
	<head>
		<link rel="stylesheet" type="text/css" href="styles/all2.css" media="all"/>
	<meta charset="UTF-8">
	<title>CONTACT</title>
	</head>
	<body>
		<a href="index.html"><h1 class="header" id="music">Let's chat!</h1></a>
      <p class="bodytext">Thanks,</p>
      <?php echo $_POST["name"];?><br>
      <p class="bodytext">Your message:</p>
      <?php echo $_POST["message"];?><br>
      <p class="bodytext">has been relayed.</p>

<?php include("includes/navigation.php"); ?>
	<p class="footer">all media on this site, unless otherwise noted
	<br>&copy; 2017 Jessica Vanam </p>
	</body>
</html>
