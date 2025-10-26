async function loadTutor() {
  const response = await fetch("data.json");
  const tutor = await response.json();

  document.getElementById("tutor-profile").innerHTML = `
    <section class="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row gap-8">
      <img src="${tutor.photo}" alt="${tutor.name}" class="w-48 h-48 rounded-full object-cover border-4 border-indigo-100 mx-auto md:mx-0">
      <div class="flex-1">
        <h1 class="text-3xl font-bold text-indigo-700">${tutor.name}</h1>
        <p class="text-gray-600">${tutor.title}</p>
        <p class="mt-2 text-sm text-gray-500">${tutor.location}</p>

        <div class="mt-4">
          <h2 class="text-xl font-semibold">About</h2>
          <p class="text-gray-700 mt-2">${tutor.bio}</p>
        </div>

        <div class="mt-4">
          <h2 class="text-xl font-semibold">Education</h2>
          <p class="text-gray-700 mt-1">${tutor.education.degree} — <span class="font-medium">${tutor.education.institution}</span> (${tutor.education.graduationYear})</p>
        </div>

        <div class="mt-4">
          <h2 class="text-xl font-semibold">Skills</h2>
          <div class="flex flex-wrap gap-2 mt-2">
            ${tutor.skills.map(skill => `<span class="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full">${skill}</span>`).join("")}
          </div>
        </div>

        <div class="mt-6">
          <h2 class="text-xl font-semibold">Testimonials</h2>
          <div class="mt-2 space-y-2">
            ${tutor.testimonials.map(t => `
              <div class="bg-gray-100 p-3 rounded-xl">
                <p class="italic text-gray-600">"${t.comment}"</p>
                <p class="text-sm text-right font-semibold text-indigo-600">– ${t.name}</p>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="mt-6 flex gap-4">
          <a href="${tutor.socials.linkedin}" target="_blank" class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">LinkedIn</a>
          <a href="${tutor.socials.whatsapp}" target="_blank" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">WhatsApp</a>
          <a href="${tutor.socials.email}" class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">Email</a>
        </div>
      </div>
    </section>
  `;
}

loadTutor();
