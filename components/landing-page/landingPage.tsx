import Head from 'next/head'
import { Box } from "@chakra-ui/react"
import Typewriter from 'typewriter-effect';
import Link from 'next/link'

function LandingPage() {
  return(
    <section>
      <div>
        <h1>JUST TAKE A</h1>
        <p>
          <Typewriter 
          />
        </p>
      </div>
      <div>
        <Box>
          SIGN UP
        </Box>
        <Box>
          LOG IN
        </Box>
      </div>
      <div>
        <Link href="/">
          <a>
            log in as a guest
          </a>
        </Link>
     </div>
    </section>
  );
}

export default LandingPage;