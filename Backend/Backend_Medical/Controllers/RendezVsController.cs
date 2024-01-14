using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend_Medical.Models;

namespace Backend_Medical.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RendezVsController : ControllerBase
    {
        private readonly kokoContext _context;

        public RendezVsController(kokoContext context)
        {
            _context = context;
        }

        // GET: api/RendezVs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RendezV>>> GetRendezVs()
        {
            return await _context.RendezVs.ToListAsync();
        }

        // GET: api/RendezVs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RendezV>> GetRendezV(int id)
        {
            var rendezV = await _context.RendezVs.FindAsync(id);

            if (rendezV == null)
            {
                return NotFound();
            }

            return rendezV;
        }

        // PUT: api/RendezVs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRendezV(int id, RendezV rendezV)
        {
            if (id != rendezV.RdvId)
            {
                return BadRequest();
            }

            _context.Entry(rendezV).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RendezVExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/RendezVs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RendezV>> PostRendezV(RendezV rendezV)
        {
            _context.RendezVs.Add(rendezV);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (RendezVExists(rendezV.RdvId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetRendezV", new { id = rendezV.RdvId }, rendezV);
        }

        // DELETE: api/RendezVs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRendezV(int id)
        {
            var rendezV = await _context.RendezVs.FindAsync(id);
            if (rendezV == null)
            {
                return NotFound();
            }

            _context.RendezVs.Remove(rendezV);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RendezVExists(int id)
        {
            return _context.RendezVs.Any(e => e.RdvId == id);
        }
    }
}
