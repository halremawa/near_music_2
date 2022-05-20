using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Flurl.Http;
using System.Text.Json;
using MusicShare.Biz;

namespace MusicServer.Utils
{
    public static class NearSettings
    {
        public static string BaseUrl => "https://rpc.testnet.near.org";
    }
    public class NearFetchers
    {
        private static readonly HttpClient client = new HttpClient();
        public async Task<ViewKeyResult> GetKeyDetails(string accountId, string publicKey)
        {
            var reqstr = string.Format("{{'jsonrpc': '2.0','id': 'halremawa','method': 'query','params': {{'request_type': 'view_access_key','finality': 'final','account_id': '{0}','public_key': '{1}'}}}}", accountId, publicKey).Replace("'", "\"");
            var content = new StringContent(reqstr, Encoding.UTF8, "application/json");
            var response = await client.PostAsync(NearSettings.BaseUrl, content);
            var responseString = await response.Content.ReadAsStringAsync();
            var res = JsonSerializer.Deserialize<ViewKeyResult>(responseString);

            return res;
        }
        public async Task<GetKeyListResult> GetKeyList(string accountId, string finality = "final")
        {
            var reqstr = string.Format("{{'jsonrpc': '2.0','id': 'dontcare','method': 'query','params': {{'request_type': 'view_access_key_list','finality': '{1}','account_id': '{0}'}}}}", accountId, finality).Replace("'", "\"");
            var content = new StringContent(reqstr, Encoding.UTF8, "application/json");
            var response = await client.PostAsync(NearSettings.BaseUrl, content);
            var responseString = await response.Content.ReadAsStringAsync();
            var res = JsonSerializer.Deserialize<GetKeyListResult>(responseString);

            return res;
        }
        public async Task<ViewAccountResult> ViewAccountDetails(string accountId, string finality = "final")
        {
            var reqstr = string.Format("{{'jsonrpc': '2.0','id': 'dontcare','method': 'query','params': {{'request_type': 'view_account','finality': '{1}','account_id': '{0}'}}}}", accountId, finality).Replace("'", "\"");
            var content = new StringContent(reqstr, Encoding.UTF8, "application/json");
            var response = await client.PostAsync(NearSettings.BaseUrl, content);
            var responseString = await response.Content.ReadAsStringAsync();
            var res = JsonSerializer.Deserialize<ViewAccountResult>(responseString);

            return res;
        }

        public async Task<GetGasPriceResult> GetGasPrice(string pars)
        {
            string? reqstr;
            //check if pars ia a number
            if (int.TryParse(pars, out int result) || pars.Trim().ToLower() == "null")
            {
                reqstr = string.Format("{{'jsonrpc': '2.0','id': 'dontcare','method': 'gas_price','params': [{0}]}}", pars).Replace("'", "\"");
            }
            else
            {
                reqstr = string.Format("{{ 'jsonrpc': '2.0','id': 'dontcare','method': 'gas_price','params': ['{0}']}}", pars).Replace("'", "\"");
            }
            var content = new StringContent(reqstr, Encoding.UTF8, "application/json");
            var response = await client.PostAsync(NearSettings.BaseUrl, content);
            var responseString = await response.Content.ReadAsStringAsync();
            var res = JsonSerializer.Deserialize<GetGasPriceResult>(responseString);

            return res;
        }
        /// <summary>
        /// Does not wait for result
        /// </summary>
        /// <param name="pars">Should be signed and encoded in base64</param>
        /// <returns></returns>
        public async Task<SendTransAsyncResult> SendTransactionAsync(string pars)
        {
            string reqstr = string.Format("{{ 'jsonrpc': '2.0','id': 'dontcare','method': 'broadcast_tx_async','params': ['{0}']}}", pars).Replace("'", "\"");

            var content = new StringContent(reqstr, Encoding.UTF8, "application/json");
            var response = await client.PostAsync(NearSettings.BaseUrl, content);
            var responseString = await response.Content.ReadAsStringAsync();
            var res = JsonSerializer.Deserialize<SendTransAsyncResult>(responseString);

            return res;
        }
        /// <summary>
        /// Waits for 10 seconds for result
        /// </summary>
        /// <param name="pars">Should be signed and encoded in base64</param>
        /// <returns></returns>
        public async Task<SendTransAwaitResult> SendTransactionAwait(string pars)
        {
            string reqstr = string.Format("{{ 'jsonrpc': '2.0','id': 'dontcare','method': 'broadcast_tx_commit','params': ['{0}']}}", pars).Replace("'", "\"");

            var content = new StringContent(reqstr, Encoding.UTF8, "application/json");
            var response = await client.PostAsync(NearSettings.BaseUrl, content);
            var responseString = await response.Content.ReadAsStringAsync();
            var res = JsonSerializer.Deserialize<SendTransAwaitResult>(responseString);

            return res;
        }
        public async Task<GetTransStatusResult> GetTransactionStatus(string transHash, string senderAccountId)
        {
            string reqstr = string.Format("{{ 'jsonrpc': '2.0','id': 'dontcare','method': 'tx','params': ['{0}','{1}']}}", transHash, senderAccountId).Replace("'", "\"");

            var content = new StringContent(reqstr, Encoding.UTF8, "application/json");
            var response = await client.PostAsync(NearSettings.BaseUrl, content);
            var responseString = await response.Content.ReadAsStringAsync();
            var res = JsonSerializer.Deserialize<GetTransStatusResult>(responseString);

            return res;
        }
        public async Task<GetTransStatusWRecieptResult> GetTransactionStatusWithReciepts(string transHash, string senderAccountId)
        {
            string reqstr = string.Format("{{ 'jsonrpc': '2.0','id': 'dontcare','method': 'EXPERIMENTAL_tx_status','params': ['{0}','{1}']}}", transHash, senderAccountId).Replace("'", "\"");

            var content = new StringContent(reqstr, Encoding.UTF8, "application/json");
            var response = await client.PostAsync(NearSettings.BaseUrl, content);
            var responseString = await response.Content.ReadAsStringAsync();
            var res = JsonSerializer.Deserialize<GetTransStatusWRecieptResult>(responseString);

            return res;
        }
        public async Task<GetRecieptByIdResult> GetRecieptsById(string recieptId)
        {
            string reqstr = string.Format("{{ 'jsonrpc': '2.0','id': 'dontcare','method': 'EXPERIMENTAL_receiptEXPERIMENTAL_receipt','params': ['{0}']}}", recieptId).Replace("'", "\"");

            var content = new StringContent(reqstr, Encoding.UTF8, "application/json");
            var response = await client.PostAsync(NearSettings.BaseUrl, content);
            var responseString = await response.Content.ReadAsStringAsync();
            var res = JsonSerializer.Deserialize<GetRecieptByIdResult>(responseString);

            return res;
        }



    }
}
