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
    public class GestionHorairesController : ControllerBase
    {
        private readonly kokoContext _context;

        public GestionHorairesController(kokoContext context)
        {
            _context = context;
        }

        // GET: api/GestionHoraires
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GestionHoraire>>> GetGestionHoraires()
        {
            return await _context.GestionHoraires.ToListAsync();
        }

        // GET: api/GestionHoraires/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GestionHoraire>> GetGestionHoraire(int id)
        {
            var gestionHoraire = await _context.GestionHoraires.FindAsync(id);

            if (gestionHoraire == null)
            {
                return NotFound();
            }

            return gestionHoraire;
        }

        // PUT: api/GestionHoraires/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGestionHoraire(int id, GestionHoraire gestionHoraire)
        {
            if (id != gestionHoraire.GdhId)
            {
                return BadRequest();
            }

            _context.Entry(gestionHoraire).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GestionHoraireExists(id))
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

        // POST: api/GestionHoraires
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<GestionHoraire>> PostGestionHoraire(GestionHoraire gestionHoraire)
        {
            _context.GestionHoraires.Add(gestionHoraire);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (GestionHoraireExists(gestionHoraire.GdhId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetGestionHoraire", new { id = gestionHoraire.GdhId }, gestionHoraire);
        }

        // DELETE: api/GestionHoraires/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGestionHoraire(int id)
        {
            var gestionHoraire = await _context.GestionHoraires.FindAsync(id);
            if (gestionHoraire == null)
            {
                return NotFound();
            }

            _context.GestionHoraires.Remove(gestionHoraire);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GestionHoraireExists(int id)
        {
            return _context.GestionHoraires.Any(e => e.GdhId == id);
        }
    }
}
