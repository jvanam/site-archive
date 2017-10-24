<!DOCTYPE html>
	<html>
	<head>
		<link rel="stylesheet" type="text/css" href="styles/all2.css" media="all"/>
	<meta charset="UTF-8">
	<title>CONTACT</title>
	</head>
	<body>
		<a href="index.html"><h1 class="header" id="music">Let's chat!</h1></a>
			<p class="bodytext">If you have any suggestions on how I can improve my site, or you just want to talk, send me a message below</p>
			<p class="subheader"><strong>MY GREAT FORM</strong></p>
  <form action="contactform.php" method="post">
  Name: <input type="text" name="name"><br>
  Message: <input type="text" name="message"><br>
  <a href="contactform.php"><input type="submit"></a>
  </form>

<?php include("includes/navigation.php"); ?>
	<p class="footer">all media on this site, unless otherwise noted
	<br>&copy; 2017 Jessica Vanam </p>
	</body>
</html>
