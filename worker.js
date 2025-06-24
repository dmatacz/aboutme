addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return new Response(getHTML(), {
      headers: {
          'Content-Type': 'text/html',
          'Cache-Control': 'max-age=3600',
          'X-Content-Type-Options': 'nosniff'
      }
  })
}

function getHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Damian Matacz - Network Strategy Director</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
      body {
          font-family: 'Inter', sans-serif;
      }
  </style>
</head>
<body class="bg-gray-100 text-gray-900">
  <div class="container mx-auto px-4 py-8 max-w-4xl">
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <div class="bg-gradient-to-r from-[#F6821F] to-[#0052A5] h-24"></div>
          
          <div class="px-6 py-4 -mt-16 relative">
              <div class="flex items-center">
                  <div class="bg-white p-1 rounded-full shadow-lg">
                      <img src="https://media.licdn.com/dms/image/v2/C5603AQEA47wZzuRWAg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1588055032452?e=1738800000&v=beta&t=jJR_29XV1jkS3WJRZzoPxOiDvZd5oy31mxH4TSL2Bbk" alt="Damian Matacz" class="rounded-full w-32 h-32 object-cover">
                  </div>
                  <div class="ml-6">
                      <h1 class="text-3xl font-bold text-black">Damian Matacz</h1>
                      <p class="text-gray-700">Director, Network Strategy at Cloudflare</p>
                  </div>
              </div>
          </div>

          <div class="px-6 py-4">
              <div class="grid md:grid-cols-2 gap-6">
                  <div>
                      <h2 class="text-xl font-semibold mb-3 border-b pb-2">Professional Summary</h2>
                      <p class="text-gray-700">
                          Experienced network strategy professional specializing in building relationships and expanding global network infrastructure. Currently leading network strategy at Cloudflare, focusing on developing sustainable, mutually beneficial connections with strategic network providers.
                      </p>
                  </div>
                  
                  <div>
                      <h2 class="text-xl font-semibold mb-3 border-b pb-2">Current Role</h2>
                      <div class="mb-4">
                          <h3 class="font-bold">Director, Network Strategy</h3>
                          <p class="text-gray-600">Cloudflare | Oct 2023 - Present</p>
                          <p class="text-sm text-gray-500">Driving global network expansion and building strategic relationships</p>
                      </div>
                  </div>
              </div>

              <div class="mt-6">
                  <h2 class="text-xl font-semibold mb-3 border-b pb-2">Career Highlights</h2>
                  <ul class="space-y-3">
                      <li class="flex items-start">
                          <svg class="w-6 h-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                          </svg>
                          <span>Global Lead of Commercial Interconnection at Cloudflare</span>
                      </li>
                      <li class="flex items-start">
                          <svg class="w-6 h-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                          </svg>
                          <span>Previously Head of Global Procurement at Megaport</span>
                      </li>
                      <li class="flex items-start">
                          <svg class="w-6 h-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                          </svg>
                          <span>Finance Scholar Award from Northern Michigan University</span>
                      </li>
                  </ul>
              </div>

              <div class="mt-6 text-center">
                  <div class="flex justify-center space-x-4">
                      <a href="https://www.linkedin.com/in/damianmatacz" target="_blank" class="text-blue-600 hover:text-blue-800">
                          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                      </a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</body>
</html>`
}
