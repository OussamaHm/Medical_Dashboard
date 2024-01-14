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
    public class DossierMedsController : ControllerBase
    {
        private readonly kokoContext _context;

        public DossierMedsController(kokoContext context)
        {
            _context = context;
        }

        // GET: api/DossierMeds
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DossierMed>>> GetDossierMeds()
        {
            return await _context.DossierMeds.ToListAsync();
        }

        // GET: api/DossierMeds/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DossierMed>> GetDossierMed(int id)
        {
            var dossierMed = await _context.DossierMeds.FindAsync(id);

            if (dossierMed == null)
            {
                return NotFound();
            }

            return dossierMed;
        }

        // PUT: api/DossierMeds/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDossierMed(int id, DossierMed dossierMed)
        {
            if (id != dossierMed.DmId)
            {
                return BadRequest();
            }

            _context.Entry(dossierMed).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DossierMedExists(id))
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

        // POST: api/DossierMeds
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DossierMed>> PostDossierMed(DossierMed dossierMed)
        {
            _context.DossierMeds.Add(dossierMed);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (DossierMedExists(dossierMed.DmId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetDossierMed", new { id = dossierMed.DmId }, dossierMed);
        }

        // DELETE: api/DossierMeds/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDossierMed(int id)
        {
            var dossierMed = await _context.DossierMeds.FindAsync(id);
            if (dossierMed == null)
            {
                return NotFound();
            }

            _context.DossierMeds.Remove(dossierMed);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DossierMedExists(int id)
        {
            return _context.DossierMeds.Any(e => e.DmId == id);
        }
    }
}
