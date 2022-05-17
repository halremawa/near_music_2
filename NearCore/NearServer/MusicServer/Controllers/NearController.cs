using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MusicServer.Utils;
using MusicShare.Biz;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MusicShareServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NearKeyController : ControllerBase
    {
        // GET: api/<NearController>
        [Route("GetKeyDetails")]
        [HttpGet]
        public ViewKeyResult GetKeyDetails(string accountId, string publicKey)
        {
            return new NearFetchers().GetKeyDetails(accountId, publicKey).Result;
        }

        // GET api/<NearController>/5
        [Route("GetKeyList/{id}")]
        [HttpGet("{id}")]
        public GetKeyListResult GetKeyList(string accountId, string finality = "final")
        {
            return new NearFetchers().GetKeyList(accountId, finality).Result;
        }

    }

    [Route("api/[controller]")]
    [ApiController]
    public class NearAccountController : ControllerBase
    {
        // GET: api/<NearController>
        //[Route("GetKeyDetails")]
        [HttpGet]
        public ViewAccountResult ViewAccountDetails(string accountId, string finality = "final")
        {
            return new NearFetchers().ViewAccountDetails(accountId, finality).Result;
        }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class NearGasController : ControllerBase
    {
        // GET: api/<NearController>
        //[Route("GetKeyDetails")]
        [HttpGet]
        public GetGasPriceResult GetGasPrice(string pars)
        {
            return new NearFetchers().GetGasPrice(pars).Result;
        }
    }
    
    [Route("api/[controller]")]
    [ApiController]
    public class NearTransactionController : ControllerBase
    {
        // GET: api/<NearController>
        //[Route("GetKeyDetails")]
        [HttpGet]
        public SendTransAsyncResult SendTransactionAsync(string pars)
        {
            return new NearFetchers().SendTransactionAsync(pars).Result;
        }

        // GET: api/<NearController>
        //[Route("GetKeyDetails")]
        [HttpGet]
        public SendTransAwaitResult SendTransactionAwait(string pars)
        {
            return new NearFetchers().SendTransactionAwait(pars).Result;
        }

        // GET: api/<NearController>
        //[Route("GetKeyDetails")]
        [HttpGet]
        public GetTransStatusResult GetTransactionStatus(string transHash, string senderAccountId)
        {
            return new NearFetchers().GetTransactionStatus(transHash, senderAccountId).Result;
        }

        // GET: api/<NearController>
        //[Route("GetKeyDetails")]
        [HttpGet]
        public GetTransStatusWRecieptResult GetTransactionStatusWithReciepts(string transHash, string senderAccountId)
        {
            return new NearFetchers().GetTransactionStatusWithReciepts(transHash, senderAccountId).Result;
        }
        
        // GET: api/<NearController>
        //[Route("GetKeyDetails")]
        [HttpGet]
        public GetRecieptByIdResult GetRecieptsById(string recieptId)
        {
            return new NearFetchers().GetRecieptsById(recieptId).Result;
        }
    }
}
