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
    public class HistoriquesController : ControllerBase
    {
        private readonly kokoContext _context;

        public HistoriquesController(kokoContext context)
        {
            _context = context;
        }

        // GET: api/Historiques
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Historique>>> GetHistoriques()
        {
            return await _context.Historiques.ToListAsync();
        }

        // GET: api/Historiques/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Historique>> GetHistorique(int id)
        {
            var historique = await _context.Historiques.FindAsync(id);

            if (historique == null)
            {
                return NotFound();
            }

            return historique;
        }

        // PUT: api/Historiques/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHistorique(int id, Historique historique)
        {
            if (id != historique.HcId)
            {
                return BadRequest();
            }

            _context.Entry(historique).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HistoriqueExists(id))
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

        // POST: api/Historiques
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Historique>> PostHistorique(Historique historique)
        {
            _context.Historiques.Add(historique);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (HistoriqueExists(historique.HcId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetHistorique", new { id = historique.HcId }, historique);
        }

        // DELETE: api/Historiques/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHistorique(int id)
        {
            var historique = await _context.Historiques.FindAsync(id);
            if (historique == null)
            {
                return NotFound();
            }

            _context.Historiques.Remove(historique);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HistoriqueExists(int id)
        {
            return _context.Historiques.Any(e => e.HcId == id);
        }
    }
}
