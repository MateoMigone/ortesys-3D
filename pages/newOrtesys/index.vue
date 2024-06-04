<template>
  <div class="w-[90%] mx-auto max-h-[77vh] overflow-y-auto">
    <!-- Text banner -->
    <TextBanner title="Selecione o tipo de órtese desejado." />

    <!-- Ortesys cards container -->
    <div class="grid grid-cols-2 gap-4 2xl:gap-4">
      <!-- SHOULD USE A V-FOR WITH ALL THE ORTESYS WE GET FROM THE API -->
      <!-- APPLY FILTERS IF NECCESSARY -->
      <OrtesysCard
        title="Punho"
        description="Destinada a fraturas e entorses com ruptura de ligamentos do colo metacarpiano."
      />
      <OrtesysCard
        title="Punho dedo"
        description="Atende fraturas específicas da diáfise do úmero relacionadas ao úmero distal."
      />
      <OrtesysCard
        title="Tornozelo"
        description="Adequada para fraturas estáveis ou instáveis da tíbia ou no maléolo lateral da fíbula."
      />
      <OrtesysCard
        title="Punho polegar"
        description="Fraturas e tenossinovite De Quervain"
      />
      <OrtesysCard
        title="Punho polegar"
        description="Fraturas e tenossinovite De Quervain"
      />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main-layout",
  /*  middleware: "auth", */
});

// SHOULD GET ALL THE ORTESYS FROM AN API
</script>
