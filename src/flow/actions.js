import * as fcl from "@onflow/fcl";
import "./config";
import { user, profile } from './stores';

fcl.currentUser.subscribe(user.set, [])

export const sendQuery = async (addr) => {
  console.log(await fcl.config().all())
  const profileQueryResult = await fcl.query({
    cadence: `
      import Profile from 0xProfile

      pub fun main(address: Address): Profile.ReadOnly? {
        return Profile.read(address)
      }
    `,
    args: (arg, t) => [arg(addr, t.Address)]
  })
  
  profile.set(profileQueryResult);
}

export const unauthenticate = () => fcl.unauthenticate()
export const logIn = () => fcl.logIn()
export const signUp = () => fcl.signUp()