<script>
  import { user, profile } from "../flow/stores";
  import { sendQuery, unauthenticate, logIn, signUp } from '../flow/actions';
</script>

{#if $user?.loggedIn}
<div>
  <div>Address: {$user?.addr ?? "No Address"}</div>
  <div>Profile Name: {$profile?.name ?? "--"}</div>
  <button on:click={() => sendQuery($user.addr)}>Send Query</button>
  <button on:click={unauthenticate}>Log Out</button>
</div>
{:else}
<div>
  <button on:click={logIn}>Log In</button>
  <button on:click={signUp}>Sign Up</button>
</div>
{/if}