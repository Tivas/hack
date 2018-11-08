using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
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
		    List<byte[]> a = new List<byte[]>();

		    if (proformaNo == "RP12345")
		    {
			    var img = GetStaticImages();
				a.AddRange(img);
		    }
		    else
		    {
			    
		    }
		    return new JsonResult(a);
	    }

	    private static IEnumerable<byte[]> GetStaticImages()
	    {
		    var a = System.Reflection.Assembly.GetExecutingAssembly();
		    var imgs = a.GetManifestResourceNames().Where(i => i.Contains("rp00001"));
		    foreach (var img in imgs)
		    {
			    using (var resFilestream = a.GetManifestResourceStream(img))
			    {
				    if (resFilestream == null) yield break;
				    var ba = new byte[resFilestream.Length];
				    resFilestream.Read(ba, 0, ba.Length);
				    yield return ba;
			    }
		    }
		}
    }
}