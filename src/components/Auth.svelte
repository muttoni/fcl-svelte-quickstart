<script>
  import { user, profile, transactionStatus } from "../flow/stores";
  import { 
    sendQuery, 
    unauthenticate, 
    logIn, 
    signUp, 
    initAccount, 
    executeTransaction 
  } from '../flow/actions';
  
</script>

<style>
  .mono {
    font-family: monospace;
    font-size: 16px;
  }
  
  button {
    display:inline-block;
    padding:0.6em 1.2em;
    margin:0 0.3em 0.3em 0;
    border-radius:0.3em;
    font-size:small;
    box-sizing: border-box;
    text-decoration:none;
    font-family:sans-serif;
    text-transform:uppercase;
    font-weight:300;
    color:#FFFFFF;
    background-color:#3369ff;
    box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
    text-align:center;
    position:relative;
  }
  
  button:active {
    top:0.1em;
  }
  
  button:hover {
    cursor:pointer;
    background-color:#4a90e2;
  }

  .led-green {
    position:relative;
    display:inline-block;
    top: -2px;
    background-color: #72EA94;
    width: 7px;
    height: 7px;
    border-radius: 7px;
  }
</style>

{#if $user?.loggedIn}
<div>
  <div>
    <div class="led-green"></div>
    <span class="mono">{$user?.addr ?? "No Address"}</span> <button on:click={unauthenticate}>Log Out</button>
  </div>
  <div>Profile Name: {$profile?.name ?? "--"}</div>
  <div>Transaction Status: {$transactionStatus ?? "--"}</div> 
  
  <h2>Controls</h2>
  <button on:click={initAccount}>Init Account</button>
  <button on:click={() => sendQuery($user.addr)}>Send Query</button>
  <button on:click={executeTransaction}>Execute Transaction</button>
</div>
{:else}
<div>
  <button on:click={logIn}>Log In</button>
  <button on:click={signUp}>Sign Up</button>
</div>
{/if}