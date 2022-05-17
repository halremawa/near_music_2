namespace MusicShare.Biz
{

    //View Key
    public class ViewKeyResult
    {
        public string jsonrpc { get; set; }
        public ViewKeySubResult result { get; set; }
        public string id { get; set; }
    }

    public class ViewKeySubResult
    {
        public int nonce { get; set; }
        public VKSRPermission permission { get; set; }
        public int block_height { get; set; }
        public string block_hash { get; set; }
    }

    public class VKSRPermission
    {
        public VKSRFunctioncall FunctionCall { get; set; }
    }

    public class VKSRFunctioncall
    {
        public string allowance { get; set; }
        public string receiver_id { get; set; }
        public string[] method_names { get; set; }
    }


    //Get key list
    public class GetKeyListResult
    {
        public string jsonrpc { get; set; }
        public GetKeyListSubResult result { get; set; }
        public string id { get; set; }
    }

    public class GetKeyListSubResult
    {
        public GetKeyListKey[] keys { get; set; }
        public int block_height { get; set; }
        public string block_hash { get; set; }
    }

    public class GetKeyListKey
    {
        public string public_key { get; set; }
        public GetKeyListAccessKey access_key { get; set; }
    }

    public class GetKeyListAccessKey
    {
        public int nonce { get; set; }
        public object permission { get; set; }
    }


    //View Account


    public class ViewAccountResult
    {
        public string jsonrpc { get; set; }
        public ViewAccountSubResult result { get; set; }
        public string id { get; set; }
    }

    public class ViewAccountSubResult
    {
        public string amount { get; set; }
        public string locked { get; set; }
        public string code_hash { get; set; }
        public int storage_usage { get; set; }
        public int storage_paid_at { get; set; }
        public int block_height { get; set; }
        public string block_hash { get; set; }
    }


    // View account changes


    public class GetAccountChangesResult
    {
        public string jsonrpc { get; set; }
        public GetAccountChangesSubResult result { get; set; }
        public string id { get; set; }
    }

    public class GetAccountChangesSubResult
    {
        public string block_hash { get; set; }
        public GetAccountChangeDetail1[] changes { get; set; }
    }

    public class GetAccountChangeDetail1
    {
        public GetAccountChangeCause cause { get; set; }
        public string type { get; set; }
        public GetAccountChangeDetails2 change { get; set; }
    }

    public class GetAccountChangeCause
    {
        public string type { get; set; }
        public string tx_hash { get; set; }
        public string receipt_hash { get; set; }
    }

    public class GetAccountChangeDetails2
    {
        public string account_id { get; set; }
        public string amount { get; set; }
        public string locked { get; set; }
        public string code_hash { get; set; }
        public int storage_usage { get; set; }
        public int storage_paid_at { get; set; }
    }


    //Call contract function generic 


    public class CallContractFunctionResult<T>
    {
        public string jsonrpc { get; set; }
        public CallContractFunctionSubResult<T> result { get; set; }
        public string id { get; set; }
    }

    public class CallContractFunctionSubResult<T>
    {
        public T result { get; set; }
        public object[] logs { get; set; }
        public int block_height { get; set; }
        public string block_hash { get; set; }
    }


    //get gas price

    public class GetGasPriceResult
    {
        public string jsonrpc { get; set; }
        public GetGasPriceSubResult result { get; set; }
        public string id { get; set; }
    }

    public class GetGasPriceSubResult
    {
        public string gas_price { get; set; }
    }

    //send transaction async


    public class SendTransAsyncResult
    {
        public string jsonrpc { get; set; }
        public string result { get; set; }
        public string id { get; set; }
    }

    //Send transaction await


    public class SendTransAwaitResult
    {
        public string jsonrpc { get; set; }
        public SendTransAwaitSubResult result { get; set; }
        public string id { get; set; }
    }

    public class SendTransAwaitSubResult
    {
        public STARStatus status { get; set; }
        public STARTransaction transaction { get; set; }
        public STARTransaction_Outcome transaction_outcome { get; set; }
        public STARReceipts_Outcome[] receipts_outcome { get; set; }
    }

    public class STARStatus
    {
        public string SuccessValue { get; set; }
    }

    public class STARTransaction
    {
        public string signer_id { get; set; }
        public string public_key { get; set; }
        public int nonce { get; set; }
        public string receiver_id { get; set; }
        public STARAction[] actions { get; set; }
        public string signature { get; set; }
        public string hash { get; set; }
    }

    public class STARAction
    {
        public STARTransfer Transfer { get; set; }
    }

    public class STARTransfer
    {
        public string deposit { get; set; }
    }

    public class STARTransaction_Outcome
    {
        public object[] proof { get; set; }
        public string block_hash { get; set; }
        public string id { get; set; }
        public STAROutcome outcome { get; set; }
    }

    public class STAROutcome
    {
        public object[] logs { get; set; }
        public string[] receipt_ids { get; set; }
        public long gas_burnt { get; set; }
        public string tokens_burnt { get; set; }
        public string executor_id { get; set; }
        public STARStatus1 status { get; set; }
    }

    public class STARStatus1
    {
        public string SuccessReceiptId { get; set; }
    }

    public class STARReceipts_Outcome
    {
        public object[] proof { get; set; }
        public string block_hash { get; set; }
        public string id { get; set; }
        public STAROutcome1 outcome { get; set; }
    }

    public class STAROutcome1
    {
        public object[] logs { get; set; }
        public string[] receipt_ids { get; set; }
        public long gas_burnt { get; set; }
        public string tokens_burnt { get; set; }
        public string executor_id { get; set; }
        public STARStatus2 status { get; set; }
    }

    public class STARStatus2
    {
        public string SuccessValue { get; set; }
    }


    //Transaction Status


    public class GetTransStatusResult
    {
        public string jsonrpc { get; set; }
        public GetTransStatusSubResult result { get; set; }
        public string id { get; set; }
    }

    public class GetTransStatusSubResult
    {
        public GTSRStatus status { get; set; }
        public GTSRTransaction transaction { get; set; }
        public GTSRTransaction_Outcome transaction_outcome { get; set; }
        public GTSRReceiptsOutcome[] receipts_outcome { get; set; }
    }

    public class GTSRStatus
    {
        public string SuccessValue { get; set; }
    }

    public class GTSRTransaction
    {
        public string signer_id { get; set; }
        public string public_key { get; set; }
        public int nonce { get; set; }
        public string receiver_id { get; set; }
        public GTSRAction[] actions { get; set; }
        public string signature { get; set; }
        public string hash { get; set; }
    }

    public class GTSRAction
    {
        public GTSRTransfer Transfer { get; set; }
    }

    public class GTSRTransfer
    {
        public string deposit { get; set; }
    }

    public class GTSRTransaction_Outcome
    {
        public GTSRProof[] proof { get; set; }
        public string block_hash { get; set; }
        public string id { get; set; }
        public GTSROutcome outcome { get; set; }
    }

    public class GTSROutcome
    {
        public object[] logs { get; set; }
        public string[] receipt_ids { get; set; }
        public long gas_burnt { get; set; }
        public string tokens_burnt { get; set; }
        public string executor_id { get; set; }
        public GTSRStatus1 status { get; set; }
    }

    public class GTSRStatus1
    {
        public string SuccessReceiptId { get; set; }
    }

    public class GTSRProof
    {
        public string hash { get; set; }
        public string direction { get; set; }
    }

    public class GTSRReceiptsOutcome
    {
        public GTSRProof1[] proof { get; set; }
        public string block_hash { get; set; }
        public string id { get; set; }
        public GTSROutcome1 outcome { get; set; }
    }

    public class GTSROutcome1
    {
        public object[] logs { get; set; }
        public string[] receipt_ids { get; set; }
        public long gas_burnt { get; set; }
        public string tokens_burnt { get; set; }
        public string executor_id { get; set; }
        public GTSRStatus2 status { get; set; }
    }

    public class GTSRStatus2
    {
        public string SuccessValue { get; set; }
    }

    public class GTSRProof1
    {
        public string hash { get; set; }
        public string direction { get; set; }
    }


    // Transaction status with results


    public class GetTransStatusWRecieptResult
    {
        public string id { get; set; }
        public string jsonrpc { get; set; }
        public GetTransStatusWRecieptSubResult result { get; set; }
    }

    public class GetTransStatusWRecieptSubResult
    {
        public TSWRReceipt[] receipts { get; set; }
        public TSWRReceiptsOutcome[] receipts_outcome { get; set; }
        public TSWRStatus status { get; set; }
        public TSWRTransaction transaction { get; set; }
        public TSWRTransactionOutcome transaction_outcome { get; set; }
    }

    public class TSWRStatus
    {
        public string SuccessValue { get; set; }
    }

    public class TSWRTransaction
    {
        public TSWRAction[] actions { get; set; }
        public string hash { get; set; }
        public int nonce { get; set; }
        public string public_key { get; set; }
        public string receiver_id { get; set; }
        public string signature { get; set; }
        public string signer_id { get; set; }
    }

    public class TSWRAction
    {
        public TSWRFunctioncall FunctionCall { get; set; }
    }

    public class TSWRFunctioncall
    {
        public string args { get; set; }
        public string deposit { get; set; }
        public long gas { get; set; }
        public string method_name { get; set; }
    }

    public class TSWRTransactionOutcome
    {
        public string block_hash { get; set; }
        public string id { get; set; }
        public TSWROutcome outcome { get; set; }
        public TSWRProof[] proof { get; set; }
    }

    public class TSWROutcome
    {
        public string executor_id { get; set; }
        public long gas_burnt { get; set; }
        public object[] logs { get; set; }
        public string[] receipt_ids { get; set; }
        public TSWRStatus1 status { get; set; }
        public string tokens_burnt { get; set; }
    }

    public class TSWRStatus1
    {
        public string SuccessReceiptId { get; set; }
    }

    public class TSWRProof
    {
        public string direction { get; set; }
        public string hash { get; set; }
    }

    public class TSWRReceipt
    {
        public string predecessor_id { get; set; }
        public TSWRReceipt1 receipt { get; set; }
        public string receipt_id { get; set; }
        public string receiver_id { get; set; }
    }

    public class TSWRReceipt1
    {
        public TSWRAction1 Action { get; set; }
    }

    public class TSWRAction1
    {
        public TSWRAction2[] actions { get; set; }
        public string gas_price { get; set; }
        public object[] input_data_ids { get; set; }
        public object[] output_data_receivers { get; set; }
        public string signer_id { get; set; }
        public string signer_public_key { get; set; }
    }

    public class TSWRAction2
    {
        public TSWRFunctioncall1 FunctionCall { get; set; }
        public TSWRTransfer Transfer { get; set; }
    }

    public class TSWRFunctioncall1
    {
        public string args { get; set; }
        public string deposit { get; set; }
        public long gas { get; set; }
        public string method_name { get; set; }
    }

    public class TSWRTransfer
    {
        public string deposit { get; set; }
    }

    public class TSWRReceiptsOutcome
    {
        public string block_hash { get; set; }
        public string id { get; set; }
        public TSWROutcome1 outcome { get; set; }
        public TSWRProof1[] proof { get; set; }
    }

    public class TSWROutcome1
    {
        public string executor_id { get; set; }
        public long gas_burnt { get; set; }
        public string[] logs { get; set; }
        public string[] receipt_ids { get; set; }
        public TSWRStatus2 status { get; set; }
        public string tokens_burnt { get; set; }
    }

    public class TSWRStatus2
    {
        public string SuccessReceiptId { get; set; }
        public string SuccessValue { get; set; }
    }

    public class TSWRProof1
    {
        public string direction { get; set; }
        public string hash { get; set; }
    }


    //Reciept by ID


    public class GetRecieptByIdResult
    {
        public string id { get; set; }
        public string jsonrpc { get; set; }
        public GetRecieptByIdSubResult result { get; set; }
    }

    public class GetRecieptByIdSubResult
    {
        public string predecessor_id { get; set; }
        public RBIReceipt receipt { get; set; }
        public string receipt_id { get; set; }
        public string receiver_id { get; set; }
    }

    public class RBIReceipt
    {
        public RBIAction Action { get; set; }
    }

    public class RBIAction
    {
        public RBIAction1[] actions { get; set; }
        public string gas_price { get; set; }
        public object[] input_data_ids { get; set; }
        public object[] output_data_receivers { get; set; }
        public string signer_id { get; set; }
        public string signer_public_key { get; set; }
    }

    public class RBIAction1
    {
        public RBITransfer Transfer { get; set; }
    }

    public class RBITransfer
    {
        public string deposit { get; set; }
    }




}