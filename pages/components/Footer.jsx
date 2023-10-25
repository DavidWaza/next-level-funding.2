import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-9">
      <footer class="">
        <div class="mx-auto w-full p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <Link href="/" class="flex items-center">
                <img src="/assets/logo.png" class="h-auto w-28" alt="" />
              </Link>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-1">
              <div>
                <ul class="text-gray-500 dark:text-gray-400 font-medium flex gap-8">
                  <li class="mb-4">
                    <Link href="/about-us" class="hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us" class="hover:underline">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="" class="hover:underline">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="py-7">
            <p className="lexend text-slate-400">
              All information provided on this site is intended solely for the
              study purposes related to trading on financial markets and does
              not serve in any way as a specific investment recommendation,
              business recommendation, investment opportunity analysis or
              similar general recommendation regarding the trading of investment
              instruments.
            </p>
          </div>

          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <div>
              <ul class="text-gray-500 dark:text-gray-400 font-medium flex gap-8">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <div className="border-none border bg-slate-700 rounded-full p-3">
                <img src="/assets/bulb.svg" className="w-5 h-auto " alt="" />
              </div>
              <div className="border-none border bg-slate-700 rounded-full p-3">
                <img src="/assets/discord.svg" className="w-5 h-auto " alt="" />
              </div>
              <div className="border-none border bg-slate-700 rounded-full p-3">
                <img src="/assets/mail.svg" className="w-5 h-auto " alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
