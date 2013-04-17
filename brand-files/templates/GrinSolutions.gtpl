{template Structure.Scaffold}
{meta override=true}
<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="{GrinEnv.lang}"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="{GrinEnv.lang}"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="{GrinEnv.lang}"> <![endif]-->
<!--[if IE 9 ]><html class="ie ie9" lang="{GrinEnv.lang}"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="{GrinEnv.lang}"> <!--<![endif]-->
<head>
		{call Frameset.Css}
		
		{*yield PAGETITLE fallback=Structure.Head.Title*}
		{call Structure.Head.Meta}
		{call Structure.Javascript.Head}
	</head>
	<body class="{GrinEnv.browser} {GrinEnv.os} handler-{GrinEnv.handler || 'unknown'} {if GrinEnv.request_path_info}{GrinEnv.request_path_info.replace("/", "-")}{else}homePage{/if} touch-on"  data-grin-handler="{GrinEnv.handler || 'nohandler'}">
		<div class="container">
			{call Structure.Notifications}

			{call Frameset.Top}
			{yield PAGELAYOUT fallback=Structure.Layout.RightSidebar}
			{call Frameset.Footer}

			{call Frameset.Bottom}
			{call Structure.Javascript.Bottom}
		</div>
	</body>
</html>
{/template}

{namespace Frameset}

{*

######################
#    HEADING META    #
######################

*}

{template .Meta}
	{meta override=true}

	<!-- Basic Page Needs
  ================================================== -->
	<meta charset="utf-8">
	<title>bilandia - Wir k&ouml;nnen was wir tun</title>
	<meta name="description" content="bilandia GmbH - Buchmarketing">
	<meta name="author" content="bilandia GmbH - Lisa Ande, Christoph Fleig">

	<!-- Favicons
	================================================== -->

	<link rel="shortcut icon" href="{OPTION('base-href-brand-file-image',{brand_id:GrinEnv.brand_id, path:'favicon.ico'})}">
	
	<!-- Mobile Specific Metas
  ================================================== -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
{/template}

{template .Css}
	{meta override=true}

	<!-- CSS
  ================================================== -->
	{load_brand_css('base.css','design.css')}
	<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic,700italic|Bree+Serif">
{/template}

{template .Javascript}
	{meta override=true}

	<!-- Javascript
	================================================== -->

	<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

	{load_brand_js('hidden.js','hidden2.js','fade.js','jquery.cycle.all.js','newshidden.js','newshidden2.js','custom.js')}

	<script type="text/javascript">

		var currentPage = "home";
	</script>

{/template}

{*

###############
#    HEADER   #
###############

*}

{template .Top}
	{meta override=true}
	<div class="header">
		<div class="head">
			<div class="left-head">
				<div class="left-top">
					<div class="left-top-pic">
					</div>
					<div class="left-top-text">
						Der Buchclub für unabhängige Literatur
					</div>
				</div>
				<div class="left-bottom-nav">
					<a href="" class="nav-aktu">Aktuell</a>
					<a href="" class="nav-club">Club</a>
					<a href="" class="nav-books">Bücher</a>
				</div>
			</div>
		</div>
	</div>
{/template}

{*

######################
#    BOTTOM BLOCK    #
######################

*}

{template .Footer}
	{meta override=true}
	<div class="footer">
		<a href="" class="nav-foot">Impressum</a>
		<a href="" class="nav-foot">AGB</a>
		<a href="" class="nav-foot">Tubuk.digital</a>
	</div>	
{/template}

{* KEEP FOR FUTURE USE 
{template .loginModalWindow}
	<div id="loginPopup" title="Login or register">
		{call Structure.LoginPopup.Main}
	</div>
{/template}
*}


{template .Sidebar}
	{meta override=true}
{/template}