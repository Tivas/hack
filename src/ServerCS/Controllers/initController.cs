using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ServerCS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class initController : ControllerBase
    {
        // GET: api/init
        [HttpGet]
        public string Get()
        {
            return "45";
        }

        // GET: api/init/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/init
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/init/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
