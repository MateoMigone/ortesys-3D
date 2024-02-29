<template>
  <div class="bg-gray-200">
    <div class="flex h-screen">
      <!-- Sidebar -->
      <div class="w-64 bg-white p-5">
        <div class="flex items-center space-x-4 p-2 mb-5">
          <img
            class="h-12 w-12 rounded-full"
            src="https://placehold.co/100x100"
            alt="Profile image placeholder"
          />
          <div>
            <h4
              class="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide"
            >
              Dr Paulo Tavares
            </h4>
            <span class="text-sm tracking-wide flex items-center space-x-1">
              <span class="text-green-500">
                <i class="fas fa-circle"></i>
              </span>
              <span class="text-gray-600">Online</span>
            </span>
          </div>
        </div>
        <ul class="space-y-2 text-sm">
          <!-- Sidebar links -->
          <!-- ... -->
        </ul>
      </div>

      <!-- Main Content -->
      <div class="flex-1 flex flex-col overflow-hidden">
        <!-- Header -->
        <header class="flex justify-between items-center p-5 border-b-2">
          <div class="flex space-x-2">
            <!-- Search input -->
            <input
              type="search"
              placeholder="Pesquisar"
              class="px-4 py-2 w-80 focus:ring-blue-500 focus:border-blue-500"
            />
            <button class="text-blue-500">
              <i class="fas fa-search"></i>
            </button>
          </div>
          <div class="flex space-x-4">
            <!-- Icons -->
            <button class="text-blue-500">
              <i class="far fa-bell"></i>
            </button>
            <button class="text-blue-500">
              <i class="far fa-envelope"></i>
            </button>
          </div>
        </header>

        <!-- Main section -->
        <main class="flex-1 overflow-y-auto p-5">
          <div class="bg-white p-8 rounded-md w-full">
            <div class="flex items-center justify-between pb-6">
              <div>
                <h2 class="text-gray-600 font-semibold">
                  Selecione o tipo de órtese desejado.
                </h2>
                <span class="text-xs">Todos os campos são obrigatórios.</span>
              </div>
              <div class="flex items-center justify-between">
                <div class="lg:ml-40 ml-10 space-x-8">
                  <button
                    class="btn border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition ease-out duration-500"
                  >
                    Membro Superior
                  </button>
                  <button
                    class="btn border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition ease-out duration-500"
                  >
                    Membro Inferior
                  </button>
                </div>
              </div>
            </div>
            <slot />
            <!-- Content here -->
          </div>
        </main>

        <!-- Footer -->
        <footer class="flex justify-between items-center p-5 border-t">
          <span class="text-sm text-gray-600"
            >Termos e Condições | Política de Privacidade</span
          >
          <div class="flex space-x-4">
            <!-- Social media icons -->
            <a href="#" class="text-gray-600">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="text-gray-600">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="text-gray-600">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
