﻿using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace autobot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ForsiController : ControllerBase
    {
	    [HttpGet("getReportImages/{proformaNo}")]
	    public ActionResult<string> GetReportImages(string proformaNo)
	    {
		    var img = new byte[] { };
		    if (proformaNo == "RP12345")
		    {
			    img = GetStaticImage();
		    }
		    return new JsonResult(img); // File(img, "image/jpeg");
	    }

	    private static byte[] GetStaticImage()
	    {
		    var a = System.Reflection.Assembly.GetExecutingAssembly();
		    using (var resFilestream = a.GetManifestResourceStream("autobot.Resources.mazda.jpg"))
		    {
			    if (resFilestream == null) return null;
			    var ba = new byte[resFilestream.Length];
			    resFilestream.Read(ba, 0, ba.Length);
			    return ba;
		    }
	    }
    }
}