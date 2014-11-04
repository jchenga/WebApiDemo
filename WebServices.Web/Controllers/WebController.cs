using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebServices.Web.Models;

namespace WebServices.Web.Controllers
{
    public class WebController : ApiController
    {
        private ReservationRepository repo = ReservationRepository.Current;

        // GET api/<controller>
        public IEnumerable<Reservation> GetAllReservataions()
        {
            return repo.GetAll();
        }

        // GET api/<controller>/5
        public Reservation GetReservation(int id)
        {
            return repo.Get(id);
        }

        // POST api/<controller>
        public Reservation Post(Reservation item)
        {
            return repo.Add(item);
        }

        // PUT api/<controller>/5
        public bool PutReservation(Reservation item)
        {
            return repo.Update(item);
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            repo.Remove(id);
        }
    }
}