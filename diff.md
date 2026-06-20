diff --git a/.gitignore b/.gitignore
index 89a2977..e34d8c3 100644
--- a/.gitignore
+++ b/.gitignore
@@ -1,3 +1 @@
 backend
-node_modules
-.env
\ No newline at end of file
diff --git a/about.html b/about.html
deleted file mode 100644
index 803a161..0000000
--- a/about.html
+++ /dev/null
@@ -1,288 +0,0 @@
```html
-<!doctype html>
-<html lang="en">
-  <head>
-    <meta charset="UTF-8" />
-    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
-    <title>About | Mathematics Association - BITS Pilani</title>
-    <script src="https://cdn.tailwindcss.com"></script>
-    <script>
-      tailwind.config = {
-        darkMode: 'class',
-        theme: {
-          extend: {
-            fontFamily: {
-              serif: ['Merriweather', 'serif'],
-              sans: ['Lato', 'sans-serif'],
-            },
-            colors: {
-              gray: {
-                850: '#1f2937',
-                950: '#030712',
-              },
-            },
-          },
-        },
-      };
-    </script>
-    <link rel="preconnect" href="https://fonts.googleapis.com" />
-    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
-    <link
-      href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap"
-      rel="stylesheet"
-    />
-    <link rel="stylesheet" href="/styles/styles.css" />
-    <link rel="stylesheet" href="/styles/fonts.css" />
-    <link
-      rel="icon"
-      type="image/png"
-      href="/favicon/favicon-96x96-2.png"
-      sizes="96x96"
-    />
-    <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
-    <link rel="shortcut icon" href="/favicon/favicon-2.ico" />
-    <link
-      rel="apple-touch-icon-2"
-      sizes="180x180"
-      href="/favicon/apple-touch-icon-2.png"
-    />
-    <link rel="manifest" href="/favicon/site.webmanifest" />
-  </head>
-
-  <body
-    class="!bg-white dark:!bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300 font-serif antialiased selection:bg-gray-200 dark:selection:bg-gray-800 relative"
-  >
-    <!-- Navbar -->
-    <div
-      class="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800"
-    >
-      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
-        <div class="flex justify-between items-center h-20">
-          <!-- Logo / Brand -->
-          <div class="flex items-center gap-4">
-            <div class="border border-gray-900 dark:border-gray-100 p-1">
-              <img
-                src="/assets/massocicon.jpg"
-                alt="Logo"
-                class="h-8 w-8 dark:grayscale"
-              />
-            </div>
-            <div class="flex flex-col leading-none">
-              <a
-                href="/index.html"
-                class="text-xl font-bold tracking-tight hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-sans uppercase"
-              >
-                Mathematics Association
-              </a>
-              <span
-                class="text-xs text-gray-500 dark:text-gray-400 font-sans tracking-widest uppercase"
-                >BITS Pilani</span
-              >
-            </div>
-          </div>
-
-          <!-- Desktop Menu -->
-          <div
-            class="hidden md:flex items-center space-x-8 font-sans text-sm tracking-wide uppercase font-bold"
-          >
-            <a
-              href="/puzzles/index.html"
-              class="hover:text-gray-500 transition-colors"
-              >Puzzles</a
-            >
-            <a
-              href="/infinity-insights/index.html"
-              class="hover:text-gray-500 transition-colors"
-              >Blog</a
-            >
-            <a href="/about.html" class="hover:text-gray-500 transition-colors"
-              >About</a
-            >
-            <a
-              href="/contact.html"
-              class="hover:text-gray-500 transition-colors"
-              >Contact</a
-            >
-
-            <!-- Theme Toggle -->
-            <button
-              id="theme-toggle"
-              class="focus:outline-none hover:text-gray-500 transition-colors p-2 rounded-md"
-            >
-              <svg
-                id="theme-toggle-light-icon"
-                class="hidden w-5 h-5"
-                fill="currentColor"
-                viewBox="0 0 20 20"
-              >
-                <path
-                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2h-1a1 1 0 100 2h1z"
-                  fill-rule="evenodd"
-                  clip-rule="evenodd"
-                ></path>
-              </svg>
-              <svg
-                id="theme-toggle-dark-icon"
-                class="hidden w-5 h-5"
-                fill="currentColor"
-                viewBox="0 0 20 20"
-              >
-                <path
-                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
-                ></path>
-              </svg>
-            </button>
-          </div>
-
-          <!-- Mobile Menu Button -->
-          <div class="md:hidden">
-            <button
-              id="menu-toggle"
-              class="text-2xl hover:text-gray-500 transition-colors"
-            >
-              &#9776;
-            </button>
-          </div>
-        </div>
-      </nav>
-    </div>
-
-    <!-- Mobile Menu Overlay -->
-    <div
-      id="menu"
-      class="fixed top-0 left-0 w-screen h-screen bg-black/95 text-white z-[100] transform translate-x-full transition-transform duration-300 md:hidden flex flex-col justify-center items-center space-y-8 font-sans text-2xl uppercase tracking-widest"
-    >
-      <button
-        id="close-menu"
-        class="absolute top-6 right-6 text-4xl hover:text-gray-400"
-      >
-        &times;
-      </button>
-      <a href="/puzzles/index.html" class="hover:text-gray-400">Puzzles</a>
-      <a href="/infinity-insights/index.html" class="hover:text-gray-400"
-        >Blog</a
-      >
-      <a href="/about.html" class="hover:text-gray-400">About</a>
-      <a href="/contact.html" class="hover:text-gray-400">Contact</a>
-    </div>
-
-    <!-- Hero Section -->
-    <section class="py-20 px-6 text-center relative z-10">
-      <div class="max-w-4xl mx-auto">
-        <h1 class="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
-          About Us
-        </h1>
-        <p class="text-xl text-gray-600 dark:text-gray-400 font-serif italic">
-          Nurturing mathematical excellence and fostering curiosity at BITS
-          Pilani
-        </p>
-      </div>
-    </section>
-
-    <!-- What We Do Section -->
-    <section class="py-16 px-6 relative z-10">
-      <div class="max-w-4xl mx-auto">
-        <div class="border-l-4 border-gray-900 dark:border-gray-100 pl-8">
-          <h2 class="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
-            What We Do
-          </h2>
-          <p
-            class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4"
-          >
-            The Mathematics Association is dedicated to fostering a vibrant
-            community of mathematical enthusiasts at BITS Pilani, Pilani campus.
-            We organise engaging activities, challenges, and discussions to
-            deepen the understanding and appreciation of mathematics.
-          </p>
-          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
-            Through our initiatives like <strong>Puzzles 2 Puzzle U</strong> and
-            <strong>Infinity Insights</strong>, we create platforms for students
-            to explore mathematical concepts, solve challenging problems, and
-            share their insights with the broader community.
-          </p>
-        </div>
-      </div>
-    </section>
-
-    <section class="py-20 px-6 relative z-10">
-      <div class="max-w-6xl mx-auto">
-        <!-- <div class="mb-20">
-          <h2
-            class="text-4xl font-bold mb-12 tracking-tight border-b border-gray-200 dark:border-gray-800 pb-6"
-          >
-            Team Leads
-          </h2>
-          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
-            <div
-              class="bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 p-6 text-center hover:shadow-lg transition-shadow"
-            >
-              <div
-                class="w-24 h-24 bg-gray-200 dark:bg-gray-800 rounded-full mx-auto mb-4"
-              ></div>
-              <h3 class="text-xl font-bold mb-2">Team Lead Name</h3>
-              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Role</p>
-              <p class="text-sm text-gray-500 dark:text-gray-500">
-                Brief description
-              </p>
-            </div>
-          </div>
-        </div> -->
-
-        <!-- Members -->
-        <div>
-          <h2
-            class="text-4xl font-bold mb-12 tracking-tight border-b border-gray-200 dark:border-gray-800 pb-6"
-          >
-            Members
-          </h2>
-          <div
-            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
-          >
-            <!-- Member Card Template -->
-            <div
-              class="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 p-4 text-center hover:shadow-md transition-shadow"
-            >
-              <div
-                class="w-20 h-20 bg-gray-200 dark:bg-gray-800 rounded-full mx-auto mb-3"
-              ></div>
-              <h4 class="font-bold text-sm">Member Name</h4>
-              <p class="text-xs text-gray-500 dark:text-gray-400">Role/Year</p>
-            </div>
-          </div>
-        </div>
-      </div>
-    </section>
-
-    <!-- Footer -->
-    <footer
-      class="bg-gray-900 dark:bg-black dark:border-t dark:border-gray-800 text-white py-12 relative z-10"
-    >
-      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
-        <div class="mb-8">
-          <img
-            src="/assets/massocicon.jpg"
-            alt="Logo"
-            class="h-12 w-12 rounded-full mx-auto grayscale opacity-80"
-          />
-        </div>
-        <p class="text-gray-400 mb-4">
-          &copy; 2026 Mathematics Association BITS Pilani. All rights reserved.
-        </p>
-        <div class="flex justify-center space-x-6">
-          <a href="#" class="text-gray-400 hover:text-white transition-colors"
-            >Instagram</a
-          >
-          <a href="#" class="text-gray-400 hover:text-white transition-colors"
-            >LinkedIn</a
-          >
-          <a href="#" class="text-gray-400 hover:text-white transition-colors"
-            >Facebook</a
-          >
-        </div>
-      </div>
-    </footer>
-
-    <script src="/scripts/darkMode.js"></script>
-    <script src="/scripts/config.js"></script>
-    <script src="/scripts/index.js"></script>
-  </body>
-</html>
```
diff --git a/assets/aimo2.png b/assets/aimo2.png
deleted file mode 100644
index f09b673..0000000
Binary files a/assets/aimo2.png and /dev/null differ
diff --git a/assets/provingtheobvious.png b/assets/provingtheobvious.png
deleted file mode 100644
index fa15b5f..0000000
Binary files a/assets/provingtheobvious.png and /dev/null differ
diff --git a/favicon/apple-touch-icon-2.png b/favicon/apple-touch-icon-2.png
deleted file mode 100644
index 4fae352..0000000
Binary files a/favicon/apple-touch-icon-2.png and /dev/null differ
diff --git a/favicon/favicon-2.ico b/favicon/favicon-2.ico
deleted file mode 100644
index ab03c5b..0000000
Binary files a/favicon/favicon-2.ico and /dev/null differ
diff --git a/favicon/favicon-96x96-2.png b/favicon/favicon-96x96-2.png
deleted file mode 100644
index b715084..0000000
Binary files a/favicon/favicon-96x96-2.png and /dev/null differ
diff --git a/index.html b/index.html
index 880e865..fe8441d 100644
--- a/index.html
+++ b/index.html
@@ -1,450 +1,243 @@
```html
-<!doctype html>
+<!DOCTYPE html>
 <html lang="en">
-  <head>
+
+<head>
     <meta charset="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>Mathematics Association - BITS Pilani</title>
     <script src="https://cdn.tailwindcss.com"></script>
     <script>
-      tailwind.config = {
-        darkMode: 'class',
-        theme: {
-          extend: {
-            fontFamily: {
-              serif: ['Merriweather', 'serif'],
-              sans: ['Lato', 'sans-serif'],
-            },
-            colors: {
-              gray: {
-                850: '#1f2937',
-                950: '#030712',
-              },
+        tailwind.config = {
+            darkMode: "class",
+            theme: {
+                extend: {
+                    fontFamily: {
+                        serif: ["Merriweather", "serif"],
+                        sans: ["Lato", "sans-serif"],
+                    },
+                    colors: {
+                        gray: {
+                            850: "#1f2937",
+                            950: "#030712",
+                        },
+                    },
+                },
             },
-          },
-        },
-      };
+        };
     </script>
     <link rel="preconnect" href="https://fonts.googleapis.com" />
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
-    <link
-      href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap"
-      rel="stylesheet"
-    />
+    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet" />
     <link rel="stylesheet" href="/styles/styles.css" />
     <link rel="stylesheet" href="/styles/fonts.css" />
-    <link
-      rel="icon"
-      type="image/png"
-      href="/favicon/favicon-96x96-2.png"
-      sizes="96x96"
-    />
+    <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
     <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
-    <link rel="shortcut icon" href="/favicon/favicon-2.ico" />
-    <link
-      rel="apple-touch-icon-2"
-      sizes="180x180"
-      href="/favicon/apple-touch-icon-2.png"
-    />
+    <link rel="shortcut icon" href="/favicon/favicon.ico" />
+    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
     <link rel="manifest" href="/favicon/site.webmanifest" />
-  </head>
+</head>
 
-  <body
-    class="!bg-white dark:!bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300 font-serif antialiased selection:bg-gray-200 dark:selection:bg-gray-800 relative"
-  >
+<body class="!bg-white dark:!bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300 font-serif antialiased selection:bg-gray-200 dark:selection:bg-gray-800 relative">
     <!-- Background Canvas -->
-    <canvas
-      id="math-canvas"
-      class="fixed inset-0 z-0 pointer-events-none"
-    ></canvas>
-
+    <canvas id="math-canvas" class="fixed inset-0 z-0 pointer-events-none"></canvas>
+    
     <!-- Navbar -->
-    <div
-      class="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800"
-    >
-      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
-        <div class="flex justify-between items-center h-20">
-          <!-- Logo / Brand -->
-          <div class="flex items-center gap-4">
-            <div class="border border-gray-900 dark:border-gray-100 p-1">
-              <img
-                src="/assets/massocicon.jpg"
-                alt="Logo"
-                class="h-8 w-8 dark:grayscale"
-              />
-            </div>
-            <div class="flex flex-col leading-none">
-              <a
-                href="/index.html"
-                class="text-xl font-bold tracking-tight hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-sans uppercase"
-              >
-                Mathematics Association
-              </a>
-              <span
-                class="text-xs text-gray-500 dark:text-gray-400 font-sans tracking-widest uppercase"
-                >BITS Pilani</span
-              >
-            </div>
-          </div>
+    <div class="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
+        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
+            <div class="flex justify-between items-center h-20">
+                <!-- Logo / Brand -->
+                <div class="flex items-center gap-4">
+                    <div class="border border-gray-900 dark:border-gray-100 p-1">
+                        <img src="/assets/massocicon.jpg" alt="Logo" class="h-8 w-8 dark:grayscale" />
+                    </div>
+                    <div class="flex flex-col leading-none">
+                        <a href="/index.html" class="text-xl font-bold tracking-tight hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-sans uppercase">
+                            Mathematics Association
+                        </a>
+                        <span class="text-xs text-gray-500 dark:text-gray-400 font-sans tracking-widest uppercase">BITS Pilani</span>
+                    </div>
+                </div>
 
-          <!-- Desktop Menu -->
-          <div
-            class="hidden md:flex items-center space-x-8 font-sans text-sm tracking-wide uppercase font-bold"
-          >
-            <a
-              href="/puzzles/index.html"
-              class="hover:text-gray-500 transition-colors"
-              >Puzzles</a
-            >
-            <a
-              href="/infinity-insights/index.html"
-              class="hover:text-gray-500 transition-colors"
-              >Blog</a
-            >
-            <a href="/about.html" class="hover:text-gray-500 transition-colors"
-              >About</a
-            >
-            <a
-              href="/contact.html"
-              class="hover:text-gray-500 transition-colors"
-              >Contact</a
-            >
+                <!-- Desktop Menu -->
+                <div class="hidden md:flex items-center space-x-8 font-sans text-sm tracking-wide uppercase font-bold">
+                    <a href="/puzzles/index.html" class="hover:text-gray-500 transition-colors">Puzzles</a>
+                    <a href="/infinity-insights/index.html" class="hover:text-gray-500 transition-colors">Blog</a>
+                    <a href="/about.html" class="hover:text-gray-500 transition-colors">About</a>
+                    <a href="/contact.html" class="hover:text-gray-500 transition-colors">Contact</a>
 
-            <!-- Theme Toggle -->
-            <button
-              id="theme-toggle"
-              class="focus:outline-none hover:text-gray-500 transition-colors p-2 rounded-md"
-            >
-              <svg
-                id="theme-toggle-light-icon"
-                class="hidden w-5 h-5"
-                fill="currentColor"
-                viewBox="0 0 20 20"
-              >
-                <path
-                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
-                  fill-rule="evenodd"
-                  clip-rule="evenodd"
-                ></path>
-              </svg>
-              <svg
-                id="theme-toggle-dark-icon"
-                class="hidden w-5 h-5"
-                fill="currentColor"
-                viewBox="0 0 20 20"
-              >
-                <path
-                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
-                ></path>
-              </svg>
-            </button>
-          </div>
+                    <!-- Theme Toggle -->
+                    <button id="theme-toggle" class="focus:outline-none hover:text-gray-500 transition-colors p-2 rounded-md">
+                        <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
+                            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>
+                        </svg>
+                        <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
+                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
+                        </svg>
+                    </button>
+                </div>
 
-          <!-- Mobile Menu Button -->
-          <div class="md:hidden">
-            <button
-              id="menu-toggle"
-              class="text-2xl hover:text-gray-500 transition-colors"
-            >
-              &#9776;
-            </button>
-          </div>
-        </div>
-      </nav>
+                <!-- Mobile Menu Button -->
+                <div class="md:hidden">
+                    <button id="menu-toggle" class="text-2xl hover:text-gray-500 transition-colors">&#9776;</button>
+                </div>
+            </div>
+        </nav>
     </div>
 
     <!-- Mobile Menu Overlay -->
-    <div
-      id="menu"
-      class="fixed top-0 left-0 w-screen h-screen bg-black/95 text-white z-[100] transform translate-x-full transition-transform duration-300 md:hidden flex flex-col justify-center items-center space-y-8 font-sans text-2xl uppercase tracking-widest"
-    >
-      <button
-        id="close-menu"
-        class="absolute top-6 right-6 text-4xl hover:text-gray-400"
-      >
-        &times;
-      </button>
-      <a href="/puzzles/index.html" class="hover:text-gray-400">Puzzles</a>
-      <a href="/infinity-insights/index.html" class="hover:text-gray-400"
-        >Blog</a
-      >
-      <a href="/about.html" class="hover:text-gray-400">About</a>
-      <a href="/contact.html" class="hover:text-gray-400">Contact</a>
+    <div id="menu" class="fixed top-0 left-0 w-screen h-screen bg-black/95 text-white z-[100] transform translate-x-full transition-transform duration-300 md:hidden flex flex-col justify-center items-center space-y-8 font-sans text-2xl uppercase tracking-widest">
+        <button id="close-menu" class="absolute top-6 right-6 text-4xl hover:text-gray-400">&times;</button>
+        <a href="/puzzles/index.html" class="hover:text-gray-400">Puzzles</a>
+        <a href="/infinity-insights/index.html" class="hover:text-gray-400">Blog</a>
+        <a href="/about.html" class="hover:text-gray-400">About</a>
+        <a href="/contact.html" class="hover:text-gray-400">Contact</a>
     </div>
 
     <!-- Hero Section -->
     <section class="py-20 px-6 text-center relative z-10">
-      <div class="max-w-4xl mx-auto">
-        <h1 class="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
-          Mathematics Association
-        </h1>
-        <p class="text-xl text-gray-600 dark:text-gray-400 font-serif italic">
-          Fostering the love for mathematics at BITS Pilani, Pilani campus.
-        </p>
-      </div>
+        <div class="max-w-4xl mx-auto">
+            <h1 class="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
+                Mathematics Association
+            </h1>
+            <p class="text-xl text-gray-600 dark:text-gray-400 font-serif italic">
+                Fostering the love for mathematics at BITS Pilani, Pilani campus.
+            </p>
+        </div>
     </section>
 
     <!-- Collage Section: Blog & Puzzles -->
     <section class="py-20 bg-transparent relative z-10">
-      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
-        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
-          <!-- Infinity Insights (Left) -->
-          <div
-            class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full border border-gray-100 dark:border-gray-800"
-          >
-            <div class="h-64 overflow-hidden">
-              <img
-                src="/assets/clocktower.webp"
-                alt="Infinity Insights"
-                class="w-full h-full object-cover transition-transform duration-700 hover:scale-105 grayscale hover:grayscale-0"
-              />
-            </div>
-            <div class="p-8 flex-1 flex flex-col justify-center">
-              <h2
-                class="text-3xl font-serif font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight"
-              >
-                Infinity Insights
-              </h2>
-              <p
-                class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
-              >
-                Dive deep into the world of mathematics with our research blog.
-                Explore fascinating topics, new discoveries, and insightful
-                articles written by our research team.
-              </p>
-              <div>
-                <a
-                  href="/infinity-insights/index.html"
-                  class="inline-block border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 font-bold py-3 px-8 rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-colors uppercase tracking-wider text-sm"
-                >
-                  Read the Blog
-                </a>
-              </div>
-            </div>
-          </div>
+        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
+            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
+                
+                <!-- Infinity Insights (Left) -->
+                <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full border border-gray-100 dark:border-gray-800">
+                    <div class="h-64 overflow-hidden">
+                        <img src="/assets/clocktower.webp" alt="Infinity Insights" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105 grayscale hover:grayscale-0" />
+                    </div>
+                    <div class="p-8 flex-1 flex flex-col justify-center">
+                        <h2 class="text-3xl font-serif font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight">Infinity Insights</h2>
+                        <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
+                            Dive deep into the world of mathematics with our research blog. Explore fascinating topics, new discoveries, and insightful articles written by our research team.
+                        </p>
+                        <div>
+                            <a href="/infinity-insights/index.html" class="inline-block border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 font-bold py-3 px-8 rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-colors uppercase tracking-wider text-sm">
+                                Read the Blog
+                            </a>
+                        </div>
+                    </div>
+                </div>
+
+                <!-- Puzzles 2 Puzzle U (Right, Offset) -->
+                <div class="md:mt-16 bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full border border-gray-100 dark:border-gray-800">
+                    <div class="p-8 flex-1 flex flex-col justify-center text-center md:text-left">
+                        <h2 class="text-3xl font-serif font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight">Puzzles 2 Puzzle U</h2>
+                        <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
+                            Challenge yourself with our weekly puzzles! Test your logic, problem-solving skills, and mathematical intuition. Compete with others and climb the leaderboard.
+                        </p>
+                        <div>
+                            <a href="/puzzles/index.html" class="inline-block bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors uppercase tracking-wider text-sm">
+                                Solve This Week's Puzzle
+                            </a>
+                        </div>
+                    </div>
+                </div>
 
-          <!-- Puzzles 2 Puzzle U (Right, Offset) -->
-          <div
-            class="md:mt-16 bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full border border-gray-100 dark:border-gray-800"
-          >
-            <div
-              class="p-8 flex-1 flex flex-col justify-center text-center md:text-left"
-            >
-              <h2
-                class="text-3xl font-serif font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight"
-              >
-                Puzzles 2 Puzzle U
-              </h2>
-              <p
-                class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
-              >
-                Challenge yourself with our weekly puzzles! Test your logic,
-                problem-solving skills, and mathematical intuition. Compete with
-                others and climb the leaderboard.
-              </p>
-              <div>
-                <a
-                  href="/puzzles/index.html"
-                  class="inline-block bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors uppercase tracking-wider text-sm"
-                >
-                  Solve This Week's Puzzle
-                </a>
-              </div>
             </div>
-          </div>
         </div>
-      </div>
     </section>
 
     <!-- Events Carousel Section -->
     <section class="py-16 bg-transparent relative z-10">
-      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
-        <h2
-          class="text-4xl font-serif font-extrabold text-center mb-12 text-gray-900 dark:text-white tracking-tight"
-        >
-          Our Events
-        </h2>
-
-        <div
-          class="relative max-w-5xl mx-auto overflow-hidden rounded-xl shadow-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
-        >
-          <div
-            id="carousel-inner"
-            class="flex transition-transform duration-500 ease-in-out"
-          >
-            <!-- Item 1 -->
-            <div class="carousel-item min-w-full">
-              <div class="flex flex-col md:flex-row h-full">
-                <div class="md:w-1/2 p-8 flex flex-col justify-center">
-                  <h3 class="text-2xl font-bold mb-4">Sherlock vs Moriarty</h3>
-                  <p class="text-gray-600 dark:text-gray-300">
-                    An exciting treasure hunt where teams race to solve clues
-                    and discover hidden secrets around the campus!
-                  </p>
+        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
+            <h2 class="text-4xl font-serif font-extrabold text-center mb-12 text-gray-900 dark:text-white tracking-tight">Our Events</h2>
+            
+            <div class="relative max-w-5xl mx-auto overflow-hidden rounded-xl shadow-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
+                <div id="carousel-inner" class="flex transition-transform duration-500 ease-in-out">
+                    <!-- Item 1 -->
+                    <div class="carousel-item min-w-full">
+                        <div class="flex flex-col md:flex-row h-full">
+                            <div class="md:w-1/2 p-8 flex flex-col justify-center">
+                                <h3 class="text-2xl font-bold mb-4">Sherlock vs Moriarty</h3>
+                                <p class="text-gray-600 dark:text-gray-300">An exciting treasure hunt where teams race to solve clues and discover hidden secrets around the campus!</p>
+                            </div>
+                            <div class="md:w-1/2 h-64 md:h-auto">
+                                <img src="/assets/svm.png" alt="Sherlock vs Moriarty" class="w-full h-full object-cover" />
+                            </div>
+                        </div>
+                    </div>
+                    <!-- Item 2 -->
+                    <div class="carousel-item min-w-full">
+                        <div class="flex flex-col md:flex-row h-full">
+                            <div class="md:w-1/2 p-8 flex flex-col justify-center">
+                                <h3 class="text-2xl font-bold mb-4">Annual Mathematics Olympiad</h3>
+                                <p class="text-gray-600 dark:text-gray-300">A competitive event that tests mathematical skills, logic, and problem-solving under timed conditions.</p>
+                            </div>
+                            <div class="md:w-1/2 h-64 md:h-auto">
+                                <img src="https://source.unsplash.com/random/800x600?math" alt="AMO" class="w-full h-full object-cover" />
+                            </div>
+                        </div>
+                    </div>
+                    <!-- Item 3 -->
+                    <div class="carousel-item min-w-full">
+                        <div class="flex flex-col md:flex-row h-full">
+                            <div class="md:w-1/2 p-8 flex flex-col justify-center">
+                                <h3 class="text-2xl font-bold mb-4">Integration Bee</h3>
+                                <p class="text-gray-600 dark:text-gray-300">An event where participants race to solve integration problems and compete to become the "Integration Champion"!</p>
+                            </div>
+                            <div class="md:w-1/2 h-64 md:h-auto">
+                                <img src="/assets/intbee.jpg" alt="Integration Bee" class="w-full h-full object-cover" />
+                            </div>
+                        </div>
+                    </div>
+                     <!-- Item 4 -->
+                     <div class="carousel-item min-w-full">
+                        <div class="flex flex-col md:flex-row h-full">
+                            <div class="md:w-1/2 p-8 flex flex-col justify-center">
+                                <h3 class="text-2xl font-bold mb-4">Gambling Mathematics</h3>
+                                <p class="text-gray-600 dark:text-gray-300">Explore the math behind gambling odds and strategies in a series of engaging activities and games.</p>
+                            </div>
+                            <div class="md:w-1/2 h-64 md:h-auto">
+                                <img src="/assets/gambling math.jpg" alt="Gambling Mathematics" class="w-full h-full object-cover" />
+                            </div>
+                        </div>
+                    </div>
                 </div>
-                <div class="md:w-1/2 h-64 md:h-auto">
-                  <img
-                    src="/assets/svm.png"
-                    alt="Sherlock vs Moriarty"
-                    class="w-full h-full object-cover"
-                  />
-                </div>
-              </div>
-            </div>
-            <!-- Item 2 -->
-            <div class="carousel-item min-w-full">
-              <div class="flex flex-col md:flex-row h-full">
-                <div class="md:w-1/2 p-8 flex flex-col justify-center">
-                  <h3 class="text-2xl font-bold mb-4">
-                    Annual Mathematics Olympiad
-                  </h3>
-                  <p class="text-gray-600 dark:text-gray-300">
-                    A competitive event that tests mathematical skills, logic,
-                    and problem-solving under timed conditions.
-                  </p>
-                </div>
-                <div class="md:w-1/2 h-64 md:h-auto">
-                  <img
-                    src="/assets/aimo2.png"
-                    alt="AMO"
-                    class="w-full h-full object-cover"
-                  />
-                </div>
-              </div>
-            </div>
-            <!-- Item 3 -->
-            <div class="carousel-item min-w-full">
-              <div class="flex flex-col md:flex-row h-full">
-                <div class="md:w-1/2 p-8 flex flex-col justify-center">
-                  <h3 class="text-2xl font-bold mb-4">Integration Bee</h3>
-                  <p class="text-gray-600 dark:text-gray-300">
-                    An event where participants race to solve integration
-                    problems and compete to become the "Integration Champion"!
-                  </p>
-                </div>
-                <div class="md:w-1/2 h-64 md:h-auto">
-                  <img
-                    src="/assets/intbee.jpg"
-                    alt="Integration Bee"
-                    class="w-full h-full object-cover"
-                  />
-                </div>
-              </div>
-            </div>
-            <!-- Item 4 -->
-            <div class="carousel-item min-w-full">
-              <div class="flex flex-col md:flex-row h-full">
-                <div class="md:w-1/2 p-8 flex flex-col justify-center">
-                  <h3 class="text-2xl font-bold mb-4">Gambling Mathematics</h3>
-                  <p class="text-gray-600 dark:text-gray-300">
-                    Explore the math behind gambling odds and strategies in a
-                    series of engaging activities and games.
-                  </p>
-                </div>
-                <div class="md:w-1/2 h-64 md:h-auto">
-                  <img
-                    src="/assets/gambling math.jpg"
-                    alt="Gambling Mathematics"
-                    class="w-full h-full object-cover"
-                  />
-                </div>
-              </div>
-            </div>
-            <!-- Item 5 -->
-            <div class="carousel-item min-w-full">
-              <div class="flex flex-col md:flex-row h-full">
-                <div class="md:w-1/2 p-8 flex flex-col justify-center">
-                  <h3 class="text-2xl font-bold mb-4">Proving the Obvious</h3>
-                  <p class="text-gray-600 dark:text-gray-300">
-                    Dive into the mathematics behind everyday assumptions
-                    through interactive problems, puzzles, and intuitive proofs.
-                  </p>
-                </div>
-                <div class="md:w-1/2 h-64 md:h-auto">
-                  <img
-                    src="/assets/provingtheobvious.png"
-                    alt="Proving The Obvious"
-                    class="w-full h-full object-cover"
-                  />
-                </div>
-              </div>
-            </div>
-          </div>
 
-          <!-- Controls -->
-          <button
-            id="prev-button"
-            class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors focus:outline-none"
-          >
-            <svg
-              xmlns="http://www.w3.org/2000/svg"
-              class="h-6 w-6"
-              fill="none"
-              viewBox="0 0 24 24"
-              stroke="currentColor"
-            >
-              <path
-                stroke-linecap="round"
-                stroke-linejoin="round"
-                stroke-width="2"
-                d="M15 19l-7-7 7-7"
-              />
-            </svg>
-          </button>
-          <button
-            id="next-button"
-            class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors focus:outline-none"
-          >
-            <svg
-              xmlns="http://www.w3.org/2000/svg"
-              class="h-6 w-6"
-              fill="none"
-              viewBox="0 0 24 24"
-              stroke="currentColor"
-            >
-              <path
-                stroke-linecap="round"
-                stroke-linejoin="round"
-                stroke-width="2"
-                d="M9 5l7 7-7 7"
-              />
-            </svg>
-          </button>
+                <!-- Controls -->
+                <button id="prev-button" class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors focus:outline-none">
+                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
+                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
+                    </svg>
+                </button>
+                <button id="next-button" class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors focus:outline-none">
+                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
+                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
+                    </svg>
+                </button>
+            </div>
         </div>
-      </div>
     </section>
 
     <!-- Footer -->
-    <footer
-      class="bg-gray-900 dark:bg-black dark:border-t dark:border-gray-800 text-white py-12 relative z-10"
-    >
-      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
-        <div class="mb-8">
-          <img
-            src="/assets/massocicon.jpg"
-            alt="Logo"
-            class="h-12 w-12 rounded-full mx-auto grayscale opacity-80"
-          />
-        </div>
-        <p class="text-gray-400 mb-4">
-          &copy; 2026 Mathematics Association BITS Pilani. All rights reserved.
-        </p>
-        <div class="flex justify-center space-x-6">
-          <a href="#" class="text-gray-400 hover:text-white transition-colors"
-            >Instagram</a
-          >
-          <a href="#" class="text-gray-400 hover:text-white transition-colors"
-            >LinkedIn</a
-          >
-          <a href="#" class="text-gray-400 hover:text-white transition-colors"
-            >Facebook</a
-          >
+    <footer class="bg-gray-900 dark:bg-black dark:border-t dark:border-gray-800 text-white py-12 relative z-10">
+        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
+            <div class="mb-8">
+                <img src="/assets/massocicon.jpg" alt="Logo" class="h-12 w-12 rounded-full mx-auto grayscale opacity-80" />
+            </div>
+            <p class="text-gray-400 mb-4">&copy; 2025 Mathematics Association BITS Pilani. All rights reserved.</p>
+            <div class="flex justify-center space-x-6">
+                <a href="#" class="text-gray-400 hover:text-white transition-colors">Instagram</a>
+                <a href="#" class="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
+                <a href="#" class="text-gray-400 hover:text-white transition-colors">Facebook</a>
+            </div>
         </div>
-      </div>
     </footer>
 
     <script src="/scripts/darkMode.js"></script>
     <script src="/scripts/config.js"></script>
     <script src="/scripts/background.js"></script>
     <script src="/scripts/index.js"></script>
-  </body>
-</html>
+</body>
+
+</html>
\ No newline at end of file
diff --git a/infinity-insights/article.html b/infinity-insights/article.html
index e032de3..bc62bab 100644
--- a/infinity-insights/article.html
+++ b/infinity-insights/article.html
@@ -1,262 +1,173 @@
-<!doctype html>
+<!DOCTYPE html>
 <html lang="en">
-  <head>
-    <meta charset="UTF-8" />
-    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
-    <title>Article | Infinity Insights</title>
-    <!-- Tailwind CSS with Typography Plugin -->
-    <script src="https://cdn.tailwindcss.com?plugins=typography"></script>
-    <script>
-      tailwind.config = {
-        darkMode: 'class',
-        theme: {
-          extend: {
-            fontFamily: {
-              serif: ['Merriweather', 'serif'],
-              sans: ['Lato', 'sans-serif'],
-            },
-            colors: {
-              gray: {
-                850: '#1f2937',
-                950: '#030712',
-              },
-            },
-            typography: {
-              DEFAULT: {
-                css: {
-                  maxWidth: 'none',
-                },
-              },
-            },
-          },
-        },
-      };
-    </script>
-    <!-- Fonts -->
-    <link rel="preconnect" href="https://fonts.googleapis.com" />
-    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
-    <link
-      href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap"
-      rel="stylesheet"
-    />
+	<head>
+		<meta charset="UTF-8" />
+		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
+		<title>Article | Infinity Insights</title>
+		<!-- Tailwind CSS with Typography Plugin -->
+		<script src="https://cdn.tailwindcss.com?plugins=typography"></script>
+		<script>
+			tailwind.config = {
+				darkMode: "class",
+				theme: {
+					extend: {
+						fontFamily: {
+							serif: ["Merriweather", "serif"],
+							sans: ["Lato", "sans-serif"],
+						},
+						colors: {
+							gray: {
+								850: "#1f2937",
+								950: "#030712",
+                            }
+						},
+						typography: {
+							DEFAULT: {
+								css: {
+									maxWidth: 'none',
+								},
+							},
+						},
+					},
+				},
+			};
+		</script>
+		<!-- Fonts -->
+		<link rel="preconnect" href="https://fonts.googleapis.com" />
+		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
+		<link
+			href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap"
+			rel="stylesheet" />
 
-    <link rel="stylesheet" href="/styles/styles.css" />
+		<link rel="stylesheet" href="/styles/styles.css" />
+		
+		<!-- MathJax -->
+		<script>
+			window.MathJax = {
+				tex: {
+					inlineMath: [['$', '$'], ['\\(', '\\)']],
+					displayMath: [['$$', '$$'], ['\\[', '\\]']]
+				},
+				chtml: {
+					scale: 1,
+					minScale: 0.5
+				}
+			};
+		</script>
+		<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
+		
+		<!-- Inline MathJax scaling -->
+		<style>
+			mjx-container:not([display="true"]) {
+				font-size: 1.2em !important;
+			}
+		</style>
 
-    <!-- MathJax -->
-    <script>
-      window.MathJax = {
-        tex: {
-          inlineMath: [
-            ['$', '$'],
-            ['\\(', '\\)'],
-          ],
-          displayMath: [
-            ['$$', '$$'],
-            ['\\[', '\\]'],
-          ],
-        },
-        chtml: {
-          scale: 1,
-          minScale: 0.5,
-        },
-      };
-    </script>
-    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
+		<!-- Marked for Markdown Parsing -->
+        <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
+        <!-- DOMPurify for sanitization -->
+        <script src="https://cdn.jsdelivr.net/npm/dompurify/dist/purify.min.js"></script>
 
-    <!-- Inline MathJax scaling -->
-    <style>
-      mjx-container:not([display='true']) {
-        font-size: 1.2em !important;
-      }
+		<!-- Favicons -->
+		<link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
+		<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
+		<link rel="shortcut icon" href="/favicon/favicon.ico" />
+	</head>
 
-      /* Responsive prose typography */
-      .prose h1 {
-        font-size: 1.75rem;
-        margin-top: 1.5rem;
-        margin-bottom: 0.75rem;
-      }
-      .prose h2 {
-        font-size: 1.5rem;
-        margin-top: 1.25rem;
-        margin-bottom: 0.5rem;
-      }
-      .prose h3 {
-        font-size: 1.25rem;
-        margin-top: 1rem;
-        margin-bottom: 0.5rem;
-      }
-      .prose p {
-        margin-bottom: 1rem;
-      }
+	<body
+		class="bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300 font-serif antialiased selection:bg-gray-200 dark:selection:bg-gray-800">
+		<!-- Navbar -->
+		<div
+			class="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
+			<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
+				<div class="flex justify-between items-center h-20">
+					<div class="flex items-center gap-4">
+						<div class="border border-gray-900 dark:border-gray-100 p-1">
+							<img src="/assets/massocicon.jpg" alt="Logo" class="h-8 w-8 dark:grayscale" />
+						</div>
+						<div class="flex flex-col leading-none">
+							<a
+								href="/infinity-insights/index.html"
+								class="text-xl font-bold tracking-tight hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-sans uppercase">
+								Infinity Insights
+							</a>
+							<span
+								class="text-xs text-gray-500 dark:text-gray-400 font-sans tracking-widest uppercase"
+								>Maths Assoc BITS Pilani</span
+							>
+						</div>
+					</div>
 
-      /* Larger sizes on desktop */
-      @media (min-width: 768px) {
-        .prose h1 {
-          font-size: 2.25rem;
-          margin-top: 2rem;
-          margin-bottom: 1rem;
-        }
-        .prose h2 {
-          font-size: 1.75rem;
-          margin-top: 1.75rem;
-          margin-bottom: 0.75rem;
-        }
-        .prose h3 {
-          font-size: 1.5rem;
-          margin-top: 1.5rem;
-          margin-bottom: 0.5rem;
-        }
-      }
-    </style>
+					<!-- Desktop Menu -->
+					<div
+						class="hidden md:flex items-center space-x-8 font-sans text-sm tracking-wide uppercase font-bold">
+						<a href="/index.html" class="hover:text-gray-500 transition-colors">Home</a>
+						<a href="/infinity-insights/index.html" class="hover:text-gray-500 transition-colors">Blog</a>
+						<a href="/infinity-insights/write.html" class="hover:text-gray-500 transition-colors">Write</a>
 
-    <!-- Marked for Markdown Parsing -->
-    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
-    <!-- DOMPurify for sanitization -->
-    <script src="https://cdn.jsdelivr.net/npm/dompurify/dist/purify.min.js"></script>
+						<!-- Theme Toggle -->
+						<button
+							id="theme-toggle"
+							class="focus:outline-none hover:text-gray-500 transition-colors">
+							<svg
+								id="theme-toggle-light-icon"
+								class="hidden w-5 h-5"
+								fill="currentColor"
+								viewBox="0 0 20 20">
+								<path
+									d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
+									fill-rule="evenodd"
+									clip-rule="evenodd"></path>
+							</svg>
+							<svg
+								id="theme-toggle-dark-icon"
+								class="hidden w-5 h-5"
+								fill="currentColor"
+								viewBox="0 0 20 20">
+								<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
+							</svg>
+						</button>
+					</div>
 
-    <!-- Favicons -->
-    <link
-      rel="icon"
-      type="image/png"
-      href="/favicon/favicon-96x96-2.png"
-      sizes="96x96"
-    />
-    <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
-    <link rel="shortcut icon" href="/favicon/favicon-2.ico" />
-  </head>
+					<!-- Mobile Menu Button -->
+					<div class="md:hidden">
+						<button id="menu-toggle" class="text-2xl hover:text-gray-500 transition-colors">
+							&#9776;
+						</button>
+					</div>
+				</div>
+			</nav>
+		</div>
 
-  <body
-    class="bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300 font-serif antialiased selection:bg-gray-200 dark:selection:bg-gray-800"
-  >
-    <!-- Navbar -->
-    <div
-      class="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800"
-    >
-      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
-        <div class="flex justify-between items-center h-20">
-          <div class="flex items-center gap-4">
-            <div class="border border-gray-900 dark:border-gray-100 p-1">
-              <img
-                src="/assets/massocicon.jpg"
-                alt="Logo"
-                class="h-8 w-8 dark:grayscale"
-              />
-            </div>
-            <div class="flex flex-col leading-none">
-              <a
-                href="/infinity-insights/index.html"
-                class="text-xl font-bold tracking-tight hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-sans uppercase"
-              >
-                Infinity Insights
-              </a>
-              <span
-                class="text-xs text-gray-500 dark:text-gray-400 font-sans tracking-widest uppercase"
-                >Maths Assoc BITS Pilani</span
-              >
-            </div>
-          </div>
-
-          <!-- Desktop Menu -->
-          <div
-            class="hidden md:flex items-center space-x-8 font-sans text-sm tracking-wide uppercase font-bold"
-          >
-            <a href="/index.html" class="hover:text-gray-500 transition-colors"
-              >Home</a
-            >
-            <a
-              href="/infinity-insights/index.html"
-              class="hover:text-gray-500 transition-colors"
-              >Blog</a
-            >
-            <a
-              href="/infinity-insights/write.html"
-              class="hover:text-gray-500 transition-colors"
-              >Write</a
-            >
-
-            <!-- Theme Toggle -->
-            <button
-              id="theme-toggle"
-              class="focus:outline-none hover:text-gray-500 transition-colors"
-            >
-              <svg
-                id="theme-toggle-light-icon"
-                class="hidden w-5 h-5"
-                fill="currentColor"
-                viewBox="0 0 20 20"
-              >
-                <path
-                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
-                  fill-rule="evenodd"
-                  clip-rule="evenodd"
-                ></path>
-              </svg>
-              <svg
-                id="theme-toggle-dark-icon"
-                class="hidden w-5 h-5"
-                fill="currentColor"
-                viewBox="0 0 20 20"
-              >
-                <path
-                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
-                ></path>
-              </svg>
-            </button>
-          </div>
+		<!-- Mobile Menu Overlay -->
+		<div
+			id="menu"
+			class="fixed top-0 left-0 w-screen h-screen bg-black/95 text-white z-[100] transform translate-x-full transition-transform duration-300 md:hidden flex flex-col justify-center items-center space-y-8 font-sans text-2xl uppercase tracking-widest">
+			<button id="close-menu" class="absolute top-6 right-6 text-4xl hover:text-gray-400">
+				&times;
+			</button>
+			<a href="/index.html" class="hover:text-gray-400">Home</a>
+			<a href="/infinity-insights/index.html" class="hover:text-gray-400">Blog</a>
+			<a href="/infinity-insights/write.html" class="hover:text-gray-400">Write</a>
+			<a href="/contact.html" class="hover:text-gray-400">Contact</a>
+		</div>
 
-          <!-- Mobile Menu Button -->
-          <div class="md:hidden">
-            <button
-              id="menu-toggle"
-              class="text-2xl hover:text-gray-500 transition-colors"
-            >
-              &#9776;
-            </button>
-          </div>
-        </div>
-      </nav>
-    </div>
-
-    <!-- Mobile Menu Overlay -->
-    <div
-      id="menu"
-      class="fixed top-0 left-0 w-screen h-screen bg-black/95 text-white z-[100] transform translate-x-full transition-transform duration-300 md:hidden flex flex-col justify-center items-center space-y-8 font-sans text-2xl uppercase tracking-widest"
-    >
-      <button
-        id="close-menu"
-        class="absolute top-6 right-6 text-4xl hover:text-gray-400"
-      >
-        &times;
-      </button>
-      <a href="/index.html" class="hover:text-gray-400">Home</a>
-      <a href="/infinity-insights/index.html" class="hover:text-gray-400"
-        >Blog</a
-      >
-      <a href="/infinity-insights/write.html" class="hover:text-gray-400"
-        >Write</a
-      >
-      <a href="/contact.html" class="hover:text-gray-400">Contact</a>
-    </div>
-
-    <!-- Article Content -->
-    <main
-      id="article-container"
-      class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
-    >
-      <div class="animate-pulse space-y-8">
-        <div class="h-8 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
-        <div class="h-64 bg-gray-200 dark:bg-gray-800 rounded"></div>
-        <div class="space-y-4">
-          <div class="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
-          <div class="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
-          <div class="h-4 bg-gray-200 dark:bg-gray-800 rounded w-4/6"></div>
-        </div>
-      </div>
-    </main>
+		<!-- Article Content -->
+		<main id="article-container" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
+            <div class="animate-pulse space-y-8">
+                <div class="h-8 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
+                <div class="h-64 bg-gray-200 dark:bg-gray-800 rounded"></div>
+                <div class="space-y-4">
+                    <div class="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
+                    <div class="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
+                    <div class="h-4 bg-gray-200 dark:bg-gray-800 rounded w-4/6"></div>
+                </div>
+            </div>
+		</main>
 
-    <script src="/scripts/darkMode.js"></script>
-    <script src="/scripts/config.js"></script>
-    <script src="/scripts/index.js"></script>
-    <script src="/scripts/article-view.js"></script>
-  </body>
-</html>
+		<script src="/scripts/darkMode.js"></script>
+		<script src="/scripts/config.js"></script>
+		<script src="/scripts/index.js"></script>
+        <script src="/scripts/article-view.js"></script>
+	</body>
+</html>
\ No newline at end of file
diff --git a/infinity-insights/index.html b/infinity-insights/index.html
index c43fcd3..494a568 100644
--- a/infinity-insights/index.html
+++ b/infinity-insights/index.html
@@ -1,218 +1,163 @@
-<!doctype html>
+<!DOCTYPE html>
 <html lang="en">
-  <head>
-    <meta charset="UTF-8" />
-    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
-    <title>Infinity Insights | Maths Assoc BITS Pilani</title>
-    <!-- Tailwind CSS -->
-    <script src="https://cdn.tailwindcss.com"></script>
-    <script>
-      tailwind.config = {
-        darkMode: 'class',
-        theme: {
-          extend: {
-            fontFamily: {
-              serif: ['Merriweather', 'serif'],
-              sans: ['Lato', 'sans-serif'],
-            },
-            colors: {
-              gray: {
-                850: '#1f2937',
-                950: '#030712',
-              },
-            },
-          },
-        },
-      };
-    </script>
-    <!-- Fonts -->
-    <link rel="preconnect" href="https://fonts.googleapis.com" />
-    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
-    <link
-      href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap"
-      rel="stylesheet"
-    />
+	<head>
+		<meta charset="UTF-8" />
+		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
+		<title>Infinity Insights | Maths Assoc BITS Pilani</title>
+		<!-- Tailwind CSS -->
+		<script src="https://cdn.tailwindcss.com"></script>
+		<script>
+			tailwind.config = {
+				darkMode: "class",
+				theme: {
+					extend: {
+						fontFamily: {
+							serif: ["Merriweather", "serif"],
+							sans: ["Lato", "sans-serif"],
+						},
+						colors: {
+							gray: {
+								850: "#1f2937",
+								950: "#030712",
+							},
+						},
+					},
+				},
+			};
+		</script>
+		<!-- Fonts -->
+		<link rel="preconnect" href="https://fonts.googleapis.com" />
+		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
+		<link
+			href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap"
+			rel="stylesheet" />
 
-    <link rel="stylesheet" href="/styles/styles.css" />
-    <!-- Favicons -->
-    <link
-      rel="icon"
-      type="image/png"
-      href="/favicon/favicon-96x96-2.png"
-      sizes="96x96"
-    />
-    <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
-    <link rel="shortcut icon" href="/favicon/favicon-2.ico" />
-  </head>
+		<link rel="stylesheet" href="/styles/styles.css" />
+		<!-- Favicons -->
+		<link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
+		<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
+		<link rel="shortcut icon" href="/favicon/favicon.ico" />
+	</head>
 
-  <body
-    class="bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300 font-serif antialiased selection:bg-gray-200 dark:selection:bg-gray-800 min-h-screen flex flex-col"
-  >
-    <!-- Navbar -->
-    <div
-      class="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800"
-    >
-      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
-        <div class="flex justify-between items-center h-20">
-          <!-- Logo / Brand -->
-          <div class="flex items-center gap-4">
-            <div class="border border-gray-900 dark:border-gray-100 p-1">
-              <img
-                src="/assets/massocicon.jpg"
-                alt="Logo"
-                class="h-8 w-8 dark:grayscale"
-              />
-            </div>
-            <div class="flex flex-col leading-none">
-              <a
-                href="/infinity-insights/index.html"
-                class="text-xl font-bold tracking-tight hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-sans uppercase"
-              >
-                Infinity Insights
-              </a>
-              <span
-                class="text-xs text-gray-500 dark:text-gray-400 font-sans tracking-widest uppercase"
-                >Maths Assoc BITS Pilani</span
-              >
-            </div>
-          </div>
+	<body
+		class="bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300 font-serif antialiased selection:bg-gray-200 dark:selection:bg-gray-800 min-h-screen flex flex-col">
+		<!-- Navbar -->
+		<div
+			class="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
+			<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
+				<div class="flex justify-between items-center h-20">
+					<!-- Logo / Brand -->
+					<div class="flex items-center gap-4">
+						<div class="border border-gray-900 dark:border-gray-100 p-1">
+							<img src="/assets/massocicon.jpg" alt="Logo" class="h-8 w-8 dark:grayscale" />
+						</div>
+						<div class="flex flex-col leading-none">
+							<a
+								href="/infinity-insights/index.html"
+								class="text-xl font-bold tracking-tight hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-sans uppercase">
+								Infinity Insights
+							</a>
+							<span
+								class="text-xs text-gray-500 dark:text-gray-400 font-sans tracking-widest uppercase"
+								>Maths Assoc BITS Pilani</span
+							>
+						</div>
+					</div>
 
-          <!-- Desktop Menu -->
-          <div
-            class="hidden md:flex items-center space-x-8 font-sans text-sm tracking-wide uppercase font-bold"
-          >
-            <a href="/index.html" class="hover:text-gray-500 transition-colors"
-              >Home</a
-            >
-            <a
-              href="/infinity-insights/write.html"
-              class="hover:text-gray-500 transition-colors"
-              >Write</a
-            >
-            <a
-              href="/contact.html"
-              class="hover:text-gray-500 transition-colors"
-              >Contact</a
-            >
+					<!-- Desktop Menu -->
+					<div
+						class="hidden md:flex items-center space-x-8 font-sans text-sm tracking-wide uppercase font-bold">
+						<a href="/index.html" class="hover:text-gray-500 transition-colors">Home</a>
+						<a href="/infinity-insights/write.html" class="hover:text-gray-500 transition-colors">Write</a>
+						<a href="/contact.html" class="hover:text-gray-500 transition-colors">Contact</a>
 
-            <!-- Theme Toggle -->
-            <button
-              id="theme-toggle"
-              class="focus:outline-none hover:text-gray-500 transition-colors"
-            >
-              <svg
-                id="theme-toggle-light-icon"
-                class="hidden w-5 h-5"
-                fill="currentColor"
-                viewBox="0 0 20 20"
-              >
-                <path
-                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
-                  fill-rule="evenodd"
-                  clip-rule="evenodd"
-                ></path>
-              </svg>
-              <svg
-                id="theme-toggle-dark-icon"
-                class="hidden w-5 h-5"
-                fill="currentColor"
-                viewBox="0 0 20 20"
-              >
-                <path
-                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
-                ></path>
-              </svg>
-            </button>
-          </div>
+						<!-- Theme Toggle -->
+						<button
+							id="theme-toggle"
+							class="focus:outline-none hover:text-gray-500 transition-colors">
+							<svg
+								id="theme-toggle-light-icon"
+								class="hidden w-5 h-5"
+								fill="currentColor"
+								viewBox="0 0 20 20">
+								<path
+									d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
+									fill-rule="evenodd"
+									clip-rule="evenodd"></path>
+							</svg>
+							<svg
+								id="theme-toggle-dark-icon"
+								class="hidden w-5 h-5"
+								fill="currentColor"
+								viewBox="0 0 20 20">
+								<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
+							</svg>
+						</button>
+					</div>
 
-          <!-- Mobile Menu Button -->
-          <div class="md:hidden">
-            <button
-              id="menu-toggle"
-              class="text-2xl hover:text-gray-500 transition-colors"
-            >
-              &#9776;
-            </button>
-          </div>
-        </div>
-      </nav>
-    </div>
+						<!-- Mobile Menu Button -->
+					<div class="md:hidden">
+						<button id="menu-toggle" class="text-2xl hover:text-gray-500 transition-colors">
+							&#9776;
+						</button>
+					</div>
+				</div>
+			</nav>
+		</div>
 
-    <!-- Mobile Menu Overlay -->
-    <div
-      id="menu"
-      class="fixed top-0 left-0 w-screen h-screen bg-black/95 text-white z-[100] transform translate-x-full transition-transform duration-300 md:hidden flex flex-col justify-center items-center space-y-8 font-sans text-2xl uppercase tracking-widest"
-    >
-      <button
-        id="close-menu"
-        class="absolute top-6 right-6 text-4xl hover:text-gray-400"
-      >
-        &times;
-      </button>
-      <a href="/index.html" class="hover:text-gray-400">Home</a>
-      <a href="/infinity-insights/index.html" class="hover:text-gray-400"
-        >Blog</a
-      >
-      <a href="/infinity-insights/write.html" class="hover:text-gray-400"
-        >Write</a
-      >
-      <a href="/contact.html" class="hover:text-gray-400">Contact</a>
-    </div>
+		<!-- Mobile Menu Overlay -->
+		<div
+			id="menu"
+			class="fixed top-0 left-0 w-screen h-screen bg-black/95 text-white z-[100] transform translate-x-full transition-transform duration-300 md:hidden flex flex-col justify-center items-center space-y-8 font-sans text-2xl uppercase tracking-widest">
+			<button id="close-menu" class="absolute top-6 right-6 text-4xl hover:text-gray-400">
+				&times;
+			</button>
+			<a href="/index.html" class="hover:text-gray-400">Home</a>
+			<a href="/infinity-insights/index.html" class="hover:text-gray-400">Blog</a>
+			<a href="/infinity-insights/write.html" class="hover:text-gray-400">Write</a>
+			<a href="/contact.html" class="hover:text-gray-400">Contact</a>
+		</div>
 
-    <!-- Main Content -->
-    <main
-      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 flex-grow"
-    >
-      <!-- Highlighted Article (Hero) -->
-      <section
-        id="hero-article"
-        class="mb-20 border-b border-gray-200 dark:border-gray-800 pb-16 hidden"
-      ></section>
+		<!-- Main Content -->
+		<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 flex-grow">
+			<!-- Highlighted Article (Hero) -->
+			<section id="hero-article" class="mb-20 border-b border-gray-200 dark:border-gray-800 pb-16 hidden">
+			</section>
 
-      <!-- Articles Grid -->
-      <section>
-        <div class="flex items-center justify-between mb-12">
-          <h2
-            class="text-2xl font-bold border-l-4 border-black dark:border-white pl-4"
-          >
-            Latest Insights
-          </h2>
-        </div>
+			<!-- Articles Grid -->
+			<section>
+				<div class="flex items-center justify-between mb-12">
+					<h2 class="text-2xl font-bold border-l-4 border-black dark:border-white pl-4">
+						Latest Insights
+					</h2>
+				</div>
 
-        <div
-          id="articles-grid"
-          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-16"
-        >
-          <!-- Loading State - Will be replaced by JS -->
-          <div class="col-span-full text-center py-12">
-            <div
-              class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100"
-            ></div>
-            <p class="mt-4 text-gray-500">Loading articles...</p>
-          </div>
-        </div>
-      </section>
-    </main>
+				<div id="articles-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-16">
+					<!-- Loading State - Will be replaced by JS -->
+					<div class="col-span-full text-center py-12">
+						<div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100"></div>
+						<p class="mt-4 text-gray-500">Loading articles...</p>
+					</div>
+				</div>
+			</section>
+		</main>
 
-    <!-- Footer -->
-    <footer
-      class="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 mt-auto py-12"
-    >
-      <div class="max-w-7xl mx-auto px-4 text-center">
-        <p class="font-serif text-gray-500 dark:text-gray-400 italic">
-          "Mathematics is the music of reason."
-        </p>
-        <p
-          class="text-xs font-sans font-bold uppercase tracking-widest mt-4 text-gray-400"
-        >
-          &copy; 2026 Maths Association BITS Pilani
-        </p>
-      </div>
-    </footer>
+		<!-- Footer -->
+		<footer
+			class="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 mt-auto py-12">
+			<div class="max-w-7xl mx-auto px-4 text-center">
+				<p class="font-serif text-gray-500 dark:text-gray-400 italic">
+					"Mathematics is the music of reason."
+				</p>
+				<p class="text-xs font-sans font-bold uppercase tracking-widest mt-4 text-gray-400">
+					&copy; 2025 Maths Association BITS Pilani
+				</p>
+			</div>
+		</footer>
 
-    <script src="/scripts/darkMode.js"></script>
-    <script src="/scripts/config.js"></script>
-    <script src="/scripts/index.js"></script>
-    <script src="/scripts/articles.js"></script>
-  </body>
+		<script src="/scripts/darkMode.js"></script>
+		<script src="/scripts/config.js"></script>
+		<script src="/scripts/index.js"></script>
+		<script src="/scripts/articles.js"></script>
+	</body>
 </html>
diff --git a/infinity-insights/write.html b/infinity-insights/write.html
index 46b8aaf..5d2898f 100644
--- a/infinity-insights/write.html
+++ b/infinity-insights/write.html
@@ -1,403 +1,303 @@
-<!doctype html>
+<!DOCTYPE html>
 <html lang="en">
-  <head>
-    <meta charset="UTF-8" />
-    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
-    <title>Write Article | Infinity Insights</title>
-    <!-- Tailwind CSS -->
-    <script src="https://cdn.tailwindcss.com"></script>
-    <script>
-      tailwind.config = {
-        darkMode: 'class',
-        theme: {
-          extend: {
-            fontFamily: {
-              serif: ['Merriweather', 'serif'],
-              sans: ['Lato', 'sans-serif'],
-            },
-            colors: {
-              gray: {
-                850: '#1f2937',
-                950: '#030712',
-              },
-            },
-          },
-        },
-      };
-    </script>
-    <!-- Fonts -->
-    <link rel="preconnect" href="https://fonts.googleapis.com" />
-    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
-    <link
-      href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap"
-      rel="stylesheet"
-    />
+	<head>
+		<meta charset="UTF-8" />
+		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
+		<title>Write Article | Infinity Insights</title>
+		<!-- Tailwind CSS -->
+		<script src="https://cdn.tailwindcss.com"></script>
+		<script>
+			tailwind.config = {
+				darkMode: "class",
+				theme: {
+					extend: {
+						fontFamily: {
+							serif: ["Merriweather", "serif"],
+							sans: ["Lato", "sans-serif"],
+						},
+						colors: {
+							gray: {
+								850: "#1f2937",
+								950: "#030712",
+							},
+						},
+					},
+				},
+			};
+		</script>
+		<!-- Fonts -->
+		<link rel="preconnect" href="https://fonts.googleapis.com" />
+		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
+		<link
+			href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap"
+			rel="stylesheet" />
 
-    <!-- EasyMDE CSS -->
-    <link
-      rel="stylesheet"
-      href="https://unpkg.com/easymde/dist/easymde.min.css"
-    />
+		<!-- EasyMDE CSS -->
+		<link rel="stylesheet" href="https://unpkg.com/easymde/dist/easymde.min.css">
+		
+		<!-- Custom Styles -->
+		<link rel="stylesheet" href="/styles/styles.css" />
+		<style>
+			/* EasyMDE Dark Mode Overrides */
+			.dark .EasyMDEContainer .CodeMirror {
+				background-color: #1f2937;
+				color: #e5e7eb;
+				border-color: #374151;
+			}
+			.dark .EasyMDEContainer .editor-toolbar {
+				background-color: #111827;
+				border-color: #374151;
+			}
+			.dark .EasyMDEContainer .editor-toolbar i {
+				color: #e5e7eb;
+			}
+			.dark .EasyMDEContainer .editor-toolbar button:hover {
+				background-color: #374151;
+			}
+			.dark .EasyMDEContainer .editor-preview {
+				background-color: #1f2937;
+				color: #e5e7eb;
+			}
+			.dark .EasyMDEContainer .editor-statusbar {
+				color: #9ca3af;
+			}
+			
+			/* Fix Cursor Color in Dark Mode */
+			.dark .CodeMirror-cursor {
+				border-left-color: #e5e7eb !important;
+				border-color: #e5e7eb !important;
+			}
 
-    <!-- Custom Styles -->
-    <link rel="stylesheet" href="/styles/styles.css" />
-    <style>
-      /* EasyMDE Dark Mode Overrides */
-      .dark .EasyMDEContainer .CodeMirror {
-        background-color: #1f2937;
-        color: #e5e7eb;
-        border-color: #374151;
-      }
-      .dark .EasyMDEContainer .editor-toolbar {
-        background-color: #111827;
-        border-color: #374151;
-      }
-      .dark .EasyMDEContainer .editor-toolbar i {
-        color: #e5e7eb;
-      }
-      .dark .EasyMDEContainer .editor-toolbar button:hover {
-        background-color: #374151;
-      }
-      .dark .EasyMDEContainer .editor-preview {
-        background-color: #1f2937;
-        color: #e5e7eb;
-      }
-      .dark .EasyMDEContainer .editor-statusbar {
-        color: #9ca3af;
-      }
+			/* MathJax Preview Styles */
+			.editor-preview, .editor-preview-side {
+				font-family: 'Merriweather', serif;
+				line-height: 1.8;
+			}
+			
+			/* Heading styles for preview */
+			.editor-preview h1, .editor-preview-side h1 {
+				font-size: 2.25rem;
+				font-weight: 700;
+				margin-top: 1.5rem;
+				margin-bottom: 1rem;
+				line-height: 1.2;
+			}
+			.editor-preview h2, .editor-preview-side h2 {
+				font-size: 1.75rem;
+				font-weight: 700;
+				margin-top: 1.5rem;
+				margin-bottom: 0.75rem;
+				line-height: 1.3;
+			}
+			.editor-preview h3, .editor-preview-side h3 {
+				font-size: 1.5rem;
+				font-weight: 600;
+				margin-top: 1.25rem;
+				margin-bottom: 0.5rem;
+			}
+			.editor-preview h4, .editor-preview-side h4 {
+				font-size: 1.25rem;
+				font-weight: 600;
+				margin-top: 1rem;
+				margin-bottom: 0.5rem;
+			}
+			.editor-preview p, .editor-preview-side p {
+				margin-bottom: 1rem;
+			}
+			.editor-preview code, .editor-preview-side code {
+				background: rgba(0,0,0,0.1);
+				padding: 0.2em 0.4em;
+				border-radius: 3px;
+				font-size: 0.9em;
+			}
+			.dark .editor-preview code, .dark .editor-preview-side code {
+				background: rgba(255,255,255,0.1);
+			}
+			.editor-preview pre, .editor-preview-side pre {
+				background: #1f2937;
+				color: #e5e7eb;
+				padding: 1rem;
+				border-radius: 0.5rem;
+				overflow-x: auto;
+				margin-bottom: 1rem;
+			}
+			.editor-preview blockquote, .editor-preview-side blockquote {
+				border-left: 4px solid #d1d5db;
+				padding-left: 1rem;
+				margin-left: 0;
+				color: #6b7280;
+				font-style: italic;
+			}
+			.dark .editor-preview blockquote, .dark .editor-preview-side blockquote {
+				border-left-color: #4b5563;
+				color: #9ca3af;
+			}
+		</style>
 
-      /* Fix Cursor Color in Dark Mode */
-      .dark .CodeMirror-cursor {
-        border-left-color: #e5e7eb !important;
-        border-color: #e5e7eb !important;
-      }
+		<!-- Favicons -->
+		<link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
+		<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
+		<link rel="shortcut icon" href="/favicon/favicon.ico" />
+		
+		<!-- MathJax with CHTML renderer -->
+		<script>
+			window.MathJax = {
+				tex: {
+					inlineMath: [['$', '$'], ['\\(', '\\)']],
+					displayMath: [['$$', '$$'], ['\\[', '\\]']]
+				},
+				chtml: {
+					scale: 1,
+					minScale: 0.5
+				}
+			};
+		</script>
+		<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
+		
+		<!-- Marked for Markdown Parsing (for preview) -->
+		<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
+		<script>
+			marked.setOptions({ breaks: true, gfm: true });
+		</script>
+	</head>
 
-      /* MathJax Preview Styles */
-      .editor-preview,
-      .editor-preview-side {
-        font-family: 'Merriweather', serif;
-        line-height: 1.8;
-      }
+	<body
+		class="bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300 font-serif antialiased selection:bg-gray-200 dark:selection:bg-gray-800">
+		<!-- Navbar -->
+		<div
+			class="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
+			<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
+				<div class="flex justify-between items-center h-20">
+					<!-- Logo / Brand -->
+					<div class="flex items-center gap-4">
+						<div class="border border-gray-900 dark:border-gray-100 p-1">
+							<img src="/assets/massocicon.jpg" alt="Logo" class="h-8 w-8 dark:grayscale" />
+						</div>
+						<div class="flex flex-col leading-none">
+							<a
+								href="/infinity-insights/index.html"
+								class="text-xl font-bold tracking-tight hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-sans uppercase">
+								Infinity Insights
+							</a>
+							<span
+								class="text-xs text-gray-500 dark:text-gray-400 font-sans tracking-widest uppercase"
+								>Editor</span
+							>
+						</div>
+					</div>
 
-      /* Heading styles for preview */
-      .editor-preview h1,
-      .editor-preview-side h1 {
-        font-size: 2.25rem;
-        font-weight: 700;
-        margin-top: 1.5rem;
-        margin-bottom: 1rem;
-        line-height: 1.2;
-      }
-      .editor-preview h2,
-      .editor-preview-side h2 {
-        font-size: 1.75rem;
-        font-weight: 700;
-        margin-top: 1.5rem;
-        margin-bottom: 0.75rem;
-        line-height: 1.3;
-      }
-      .editor-preview h3,
-      .editor-preview-side h3 {
-        font-size: 1.5rem;
-        font-weight: 600;
-        margin-top: 1.25rem;
-        margin-bottom: 0.5rem;
-      }
-      .editor-preview h4,
-      .editor-preview-side h4 {
-        font-size: 1.25rem;
-        font-weight: 600;
-        margin-top: 1rem;
-        margin-bottom: 0.5rem;
-      }
-      .editor-preview p,
-      .editor-preview-side p {
-        margin-bottom: 1rem;
-      }
-      .editor-preview code,
-      .editor-preview-side code {
-        background: rgba(0, 0, 0, 0.1);
-        padding: 0.2em 0.4em;
-        border-radius: 3px;
-        font-size: 0.9em;
-      }
-      .dark .editor-preview code,
-      .dark .editor-preview-side code {
-        background: rgba(255, 255, 255, 0.1);
-      }
-      .editor-preview pre,
-      .editor-preview-side pre {
-        background: #1f2937;
-        color: #e5e7eb;
-        padding: 1rem;
-        border-radius: 0.5rem;
-        overflow-x: auto;
-        margin-bottom: 1rem;
-      }
-      .editor-preview blockquote,
-      .editor-preview-side blockquote {
-        border-left: 4px solid #d1d5db;
-        padding-left: 1rem;
-        margin-left: 0;
-        color: #6b7280;
-        font-style: italic;
-      }
-      .dark .editor-preview blockquote,
-      .dark .editor-preview-side blockquote {
-        border-left-color: #4b5563;
-        color: #9ca3af;
-      }
-    </style>
+					<!-- Desktop Menu -->
+					<div
+						class="hidden md:flex items-center space-x-8 font-sans text-sm tracking-wide uppercase font-bold">
+						<a href="/infinity-insights/index.html" class="hover:text-gray-500 transition-colors">Back to Blog</a>
+						
+						<!-- Theme Toggle -->
+						<button
+							id="theme-toggle"
+							class="focus:outline-none hover:text-gray-500 transition-colors">
+							<svg
+								id="theme-toggle-light-icon"
+								class="hidden w-5 h-5"
+								fill="currentColor"
+								viewBox="0 0 20 20">
+								<path
+									d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
+									fill-rule="evenodd"
+									clip-rule="evenodd"></path>
+							</svg>
+							<svg
+								id="theme-toggle-dark-icon"
+								class="hidden w-5 h-5"
+								fill="currentColor"
+								viewBox="0 0 20 20">
+								<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
+							</svg>
+						</button>
+					</div>
 
-    <!-- Favicons -->
-    <link
-      rel="icon"
-      type="image/png"
-      href="/favicon/favicon-96x96-2.png"
-      sizes="96x96"
-    />
-    <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
-    <link rel="shortcut icon" href="/favicon/favicon-2.ico" />
+					<!-- Mobile Menu Button -->
+					<div class="md:hidden">
+						<button id="menu-toggle" class="text-2xl hover:text-gray-500 transition-colors">
+							&#9776;
+						</button>
+					</div>
+				</div>
+			</nav>
+		</div>
 
-    <!-- MathJax with CHTML renderer -->
-    <script>
-      window.MathJax = {
-        tex: {
-          inlineMath: [
-            ['$', '$'],
-            ['\\(', '\\)'],
-          ],
-          displayMath: [
-            ['$$', '$$'],
-            ['\\[', '\\]'],
-          ],
-        },
-        chtml: {
-          scale: 1,
-          minScale: 0.5,
-        },
-      };
-    </script>
-    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
+		<!-- Mobile Menu Overlay -->
+		<div
+			id="menu"
+			class="fixed top-0 left-0 w-screen h-screen bg-black/95 text-white z-[100] transform translate-x-full transition-transform duration-300 md:hidden flex flex-col justify-center items-center space-y-8 font-sans text-2xl uppercase tracking-widest">
+			<button id="close-menu" class="absolute top-6 right-6 text-4xl hover:text-gray-400">
+				&times;
+			</button>
+			<a href="/index.html" class="hover:text-gray-400">Home</a>
+			<a href="/infinity-insights/index.html" class="hover:text-gray-400">Blog</a>
+			<a href="/contact.html" class="hover:text-gray-400">Contact</a>
+		</div>
 
-    <!-- Marked for Markdown Parsing (for preview) -->
-    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
-    <script>
-      marked.setOptions({ breaks: true, gfm: true });
-    </script>
-  </head>
+		<!-- Editor Content -->
+		<main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
+			<form id="article-form" class="space-y-8">
+				<!-- Metadata Section -->
+				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
+					<div class="space-y-4">
+						<div>
+							<label for="title" class="block text-sm font-sans font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">Title</label>
+							<input type="text" id="title" name="title" required
+								class="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 focus:border-black dark:focus:border-white py-2 text-2xl font-bold outline-none transition-colors placeholder-gray-300 dark:placeholder-gray-700"
+								placeholder="Enter article title..." />
+						</div>
+						<div>
+							<label for="excerpt" class="block text-sm font-sans font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">Excerpt</label>
+							<textarea id="excerpt" name="excerpt" required rows="3"
+								class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all resize-none"
+								placeholder="A short summary for the card preview..."></textarea>
+						</div>
+					</div>
+					
+					<div class="space-y-4">
+						<div>
+							<label for="cover-image" class="block text-sm font-sans font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">Cover Image URL</label>
+							<input type="url" id="cover-image" name="coverImage"
+								class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all"
+								placeholder="https://..." />
+						</div>
+						<div>
+							<label for="tags" class="block text-sm font-sans font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">Tags (comma separated)</label>
+							<input type="text" id="tags" name="tags" required
+								class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all"
+								placeholder="Algebra, Number Theory, History" />
+						</div>
+					</div>
+				</div>
 
-  <body
-    class="bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300 font-serif antialiased selection:bg-gray-200 dark:selection:bg-gray-800"
-  >
-    <!-- Navbar -->
-    <div
-      class="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800"
-    >
-      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
-        <div class="flex justify-between items-center h-20">
-          <!-- Logo / Brand -->
-          <div class="flex items-center gap-4">
-            <div class="border border-gray-900 dark:border-gray-100 p-1">
-              <img
-                src="/assets/massocicon.jpg"
-                alt="Logo"
-                class="h-8 w-8 dark:grayscale"
-              />
-            </div>
-            <div class="flex flex-col leading-none">
-              <a
-                href="/infinity-insights/index.html"
-                class="text-xl font-bold tracking-tight hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-sans uppercase"
-              >
-                Infinity Insights
-              </a>
-              <span
-                class="text-xs text-gray-500 dark:text-gray-400 font-sans tracking-widest uppercase"
-                >Editor</span
-              >
-            </div>
-          </div>
+				<!-- Main Editor -->
+				<div class="space-y-2">
+					<label class="block text-sm font-sans font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">Content (Markdown + LaTeX)</label>
+					<textarea id="editor"></textarea>
+					<p class="text-xs text-gray-500 dark:text-gray-400 italic">
+						Use <code>$...$</code> for inline math and <code>$$...$$</code> for block math.
+					</p>
+				</div>
 
-          <!-- Desktop Menu -->
-          <div
-            class="hidden md:flex items-center space-x-8 font-sans text-sm tracking-wide uppercase font-bold"
-          >
-            <a
-              href="/infinity-insights/index.html"
-              class="hover:text-gray-500 transition-colors"
-              >Back to Blog</a
-            >
+				<!-- Actions -->
+				<div class="flex justify-end gap-4 pt-8 border-t border-gray-200 dark:border-gray-800">
+					<button type="button" class="px-6 py-3 font-sans font-bold uppercase tracking-wide text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
+						Save Draft
+					</button>
+					<button type="submit" class="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-sans font-bold uppercase tracking-wide text-sm rounded hover:opacity-90 transition-opacity">
+						Submit for Review
+					</button>
+				</div>
+			</form>
+		</main>
 
-            <!-- Theme Toggle -->
-            <button
-              id="theme-toggle"
-              class="focus:outline-none hover:text-gray-500 transition-colors"
-            >
-              <svg
-                id="theme-toggle-light-icon"
-                class="hidden w-5 h-5"
-                fill="currentColor"
-                viewBox="0 0 20 20"
-              >
-                <path
-                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
-                  fill-rule="evenodd"
-                  clip-rule="evenodd"
-                ></path>
-              </svg>
-              <svg
-                id="theme-toggle-dark-icon"
-                class="hidden w-5 h-5"
-                fill="currentColor"
-                viewBox="0 0 20 20"
-              >
-                <path
-                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
-                ></path>
-              </svg>
-            </button>
-          </div>
-
-          <!-- Mobile Menu Button -->
-          <div class="md:hidden">
-            <button
-              id="menu-toggle"
-              class="text-2xl hover:text-gray-500 transition-colors"
-            >
-              &#9776;
-            </button>
-          </div>
-        </div>
-      </nav>
-    </div>
-
-    <!-- Mobile Menu Overlay -->
-    <div
-      id="menu"
-      class="fixed top-0 left-0 w-screen h-screen bg-black/95 text-white z-[100] transform translate-x-full transition-transform duration-300 md:hidden flex flex-col justify-center items-center space-y-8 font-sans text-2xl uppercase tracking-widest"
-    >
-      <button
-        id="close-menu"
-        class="absolute top-6 right-6 text-4xl hover:text-gray-400"
-      >
-        &times;
-      </button>
-      <a href="/index.html" class="hover:text-gray-400">Home</a>
-      <a href="/infinity-insights/index.html" class="hover:text-gray-400"
-        >Blog</a
-      >
-      <a href="/contact.html" class="hover:text-gray-400">Contact</a>
-    </div>
-
-    <!-- Editor Content -->
-    <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
-      <form id="article-form" class="space-y-8">
-        <!-- Metadata Section -->
-        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
-          <div class="space-y-4">
-            <div>
-              <label
-                for="title"
-                class="block text-sm font-sans font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2"
-                >Title</label
-              >
-              <input
-                type="text"
-                id="title"
-                name="title"
-                required
-                class="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-700 focus:border-black dark:focus:border-white py-2 text-2xl font-bold outline-none transition-colors placeholder-gray-300 dark:placeholder-gray-700"
-                placeholder="Enter article title..."
-              />
-            </div>
-            <div>
-              <label
-                for="excerpt"
-                class="block text-sm font-sans font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2"
-                >Excerpt</label
-              >
-              <textarea
-                id="excerpt"
-                name="excerpt"
-                required
-                rows="3"
-                class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all resize-none"
-                placeholder="A short summary for the card preview..."
-              ></textarea>
-            </div>
-          </div>
-
-          <div class="space-y-4">
-            <div>
-              <label
-                for="cover-image"
-                class="block text-sm font-sans font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2"
-                >Cover Image URL</label
-              >
-              <input
-                type="url"
-                id="cover-image"
-                name="coverImage"
-                class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all"
-                placeholder="https://..."
-              />
-            </div>
-            <div>
-              <label
-                for="tags"
-                class="block text-sm font-sans font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2"
-                >Tags (comma separated)</label
-              >
-              <input
-                type="text"
-                id="tags"
-                name="tags"
-                required
-                class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all"
-                placeholder="Algebra, Number Theory, History"
-              />
-            </div>
-          </div>
-        </div>
-
-        <!-- Main Editor -->
-        <div class="space-y-2">
-          <label
-            class="block text-sm font-sans font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400"
-            >Content (Markdown + LaTeX)</label
-          >
-          <textarea id="editor"></textarea>
-          <p class="text-xs text-gray-500 dark:text-gray-400 italic">
-            Use <code>$...$</code> for inline math and <code>$$...$$</code> for
-            block math.
-          </p>
-        </div>
-
-        <!-- Actions -->
-        <div
-          class="flex justify-end gap-4 pt-8 border-t border-gray-200 dark:border-gray-800"
-        >
-          <button
-            type="button"
-            class="px-6 py-3 font-sans font-bold uppercase tracking-wide text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
-          >
-            Save Draft
-          </button>
-          <button
-            type="submit"
-            class="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-sans font-bold uppercase tracking-wide text-sm rounded hover:opacity-90 transition-opacity"
-          >
-            Submit for Review
-          </button>
-        </div>
-      </form>
-    </main>
-
-    <script src="https://unpkg.com/easymde/dist/easymde.min.js"></script>
-    <script src="/scripts/darkMode.js"></script>
-    <script src="/scripts/config.js"></script>
-    <script src="/scripts/index.js"></script>
-    <script src="/scripts/editor.js"></script>
-  </body>
-</html>
+		<script src="https://unpkg.com/easymde/dist/easymde.min.js"></script>
+		<script src="/scripts/darkMode.js"></script>
+		<script src="/scripts/config.js"></script>
+		<script src="/scripts/index.js"></script>
+		<script src="/scripts/editor.js"></script>
+	</body>
+</html>
\ No newline at end of file
diff --git a/package-lock.json b/package-lock.json
index 8613df4..a8b9b81 100644
--- a/package-lock.json
+++ b/package-lock.json
@@ -1,692 +1,582 @@
 {
-  "name": "maths-assoc-bits-pilani.github.io",
+  "name": "puzzles2puzzleu",
   "version": "1.0.0",
   "lockfileVersion": 3,
   "requires": true,
   "packages": {
     "": {
+      "name": "puzzles2puzzleu",
+      "version": "1.0.0",
+      "license": "ISC",
       "dependencies": {
-        "npm": "^11.8.0"
-      }
-    },
-    "node_modules/npm": {
-      "version": "11.8.0",
-      "resolved": "https://registry.npmjs.org/npm/-/npm-11.8.0.tgz",
-      "integrity": "sha512-n19sJeW+RGKdkHo8SCc5xhSwkKhQUFfZaFzSc+EsYXLjSqIV0tl72aDYQVuzVvfrbysGwdaQsNLNy58J10EBSQ==",
-      "bundleDependencies": [
-        "@isaacs/string-locale-compare",
-        "@npmcli/arborist",
-        "@npmcli/config",
-        "@npmcli/fs",
-        "@npmcli/map-workspaces",
-        "@npmcli/metavuln-calculator",
-        "@npmcli/package-json",
-        "@npmcli/promise-spawn",
-        "@npmcli/redact",
-        "@npmcli/run-script",
-        "@sigstore/tuf",
-        "abbrev",
-        "archy",
-        "cacache",
-        "chalk",
-        "ci-info",
-        "cli-columns",
-        "fastest-levenshtein",
-        "fs-minipass",
-        "glob",
-        "graceful-fs",
-        "hosted-git-info",
-        "ini",
-        "init-package-json",
-        "is-cidr",
-        "json-parse-even-better-errors",
-        "libnpmaccess",
-        "libnpmdiff",
-        "libnpmexec",
-        "libnpmfund",
-        "libnpmorg",
-        "libnpmpack",
-        "libnpmpublish",
-        "libnpmsearch",
-        "libnpmteam",
-        "libnpmversion",
-        "make-fetch-happen",
-        "minimatch",
-        "minipass",
-        "minipass-pipeline",
-        "ms",
-        "node-gyp",
-        "nopt",
-        "npm-audit-report",
-        "npm-install-checks",
-        "npm-package-arg",
-        "npm-pick-manifest",
-        "npm-profile",
-        "npm-registry-fetch",
-        "npm-user-validate",
-        "p-map",
-        "pacote",
-        "parse-conflict-json",
-        "proc-log",
-        "qrcode-terminal",
-        "read",
-        "semver",
-        "spdx-expression-parse",
-        "ssri",
-        "supports-color",
-        "tar",
-        "text-table",
-        "tiny-relative-date",
-        "treeverse",
-        "validate-npm-package-name",
-        "which"
-      ],
-      "license": "Artistic-2.0",
-      "workspaces": [
-        "docs",
-        "smoke-tests",
-        "mock-globals",
-        "mock-registry",
-        "workspaces/*"
-      ],
+        "body-parser": "^1.20.3",
+        "cors": "^2.8.5",
+        "dotenv": "^17.2.2",
+        "express": "^4.21.2",
+        "google-auth-library": "^9.15.0",
+        "googleapis": "^144.0.0",
+        "mongodb": "^6.12.0",
+        "mongoose": "^8.13.0",
+        "socket.io": "^4.8.1",
+        "socket.io-client": "^4.8.1"
+      }
+    },
+    "node_modules/@mongodb-js/saslprep": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/@mongodb-js/saslprep/-/saslprep-1.2.0.tgz",
+      "integrity": "sha512-+ywrb0AqkfaYuhHs6LxKWgqbh3I72EpEgESCw37o+9qPx9WTCkgDm2B+eMrwehGtHBWHFU4GXvnSCNiFhhausg==",
       "dependencies": {
-        "@isaacs/string-locale-compare": "^1.1.0",
-        "@npmcli/arborist": "^9.1.10",
-        "@npmcli/config": "^10.5.0",
-        "@npmcli/fs": "^5.0.0",
-        "@npmcli/map-workspaces": "^5.0.3",
-        "@npmcli/metavuln-calculator": "^9.0.3",
-        "@npmcli/package-json": "^7.0.4",
-        "@npmcli/promise-spawn": "^9.0.1",
-        "@npmcli/redact": "^4.0.0",
-        "@npmcli/run-script": "^10.0.3",
-        "@sigstore/tuf": "^4.0.1",
-        "abbrev": "^4.0.0",
-        "archy": "~1.0.0",
-        "cacache": "^20.0.3",
-        "chalk": "^5.6.2",
-        "ci-info": "^4.3.1",
-        "cli-columns": "^4.0.0",
-        "fastest-levenshtein": "^1.0.16",
-        "fs-minipass": "^3.0.3",
-        "glob": "^13.0.0",
-        "graceful-fs": "^4.2.11",
-        "hosted-git-info": "^9.0.2",
-        "ini": "^6.0.0",
-        "init-package-json": "^8.2.4",
-        "is-cidr": "^6.0.1",
-        "json-parse-even-better-errors": "^5.0.0",
-        "libnpmaccess": "^10.0.3",
-        "libnpmdiff": "^8.0.13",
-        "libnpmexec": "^10.1.12",
-        "libnpmfund": "^7.0.13",
-        "libnpmorg": "^8.0.1",
-        "libnpmpack": "^9.0.13",
-        "libnpmpublish": "^11.1.3",
-        "libnpmsearch": "^9.0.1",
-        "libnpmteam": "^8.0.2",
-        "libnpmversion": "^8.0.3",
-        "make-fetch-happen": "^15.0.3",
-        "minimatch": "^10.1.1",
-        "minipass": "^7.1.1",
-        "minipass-pipeline": "^1.2.4",
-        "ms": "^2.1.2",
-        "node-gyp": "^12.1.0",
-        "nopt": "^9.0.0",
-        "npm-audit-report": "^7.0.0",
-        "npm-install-checks": "^8.0.0",
-        "npm-package-arg": "^13.0.2",
-        "npm-pick-manifest": "^11.0.3",
-        "npm-profile": "^12.0.1",
-        "npm-registry-fetch": "^19.1.1",
-        "npm-user-validate": "^4.0.0",
-        "p-map": "^7.0.4",
-        "pacote": "^21.0.4",
-        "parse-conflict-json": "^5.0.1",
-        "proc-log": "^6.1.0",
-        "qrcode-terminal": "^0.12.0",
-        "read": "^5.0.1",
-        "semver": "^7.7.3",
-        "spdx-expression-parse": "^4.0.0",
-        "ssri": "^13.0.0",
-        "supports-color": "^10.2.2",
-        "tar": "^7.5.4",
-        "text-table": "~0.2.0",
-        "tiny-relative-date": "^2.0.2",
-        "treeverse": "^3.0.0",
-        "validate-npm-package-name": "^7.0.2",
-        "which": "^6.0.0"
-      },
-      "bin": {
-        "npm": "bin/npm-cli.js",
-        "npx": "bin/npx-cli.js"
-      },
-      "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "sparse-bitfield": "^3.0.3"
       }
     },
-    "node_modules/npm/node_modules/@isaacs/balanced-match": {
-      "version": "4.0.1",
-      "inBundle": true,
-      "license": "MIT",
-      "engines": {
-        "node": "20 || >=22"
+    "node_modules/@socket.io/component-emitter": {
+      "version": "3.1.2",
+      "resolved": "https://registry.npmjs.org/@socket.io/component-emitter/-/component-emitter-3.1.2.tgz",
+      "integrity": "sha512-9BCxFwvbGg/RsZK9tjXd8s4UcwR0MWeFQ1XEKIQVVvAGJyINdrqKMcTRyLoK8Rse1GjzLV9cwjWV1olXRWEXVA=="
+    },
+    "node_modules/@types/cors": {
+      "version": "2.8.17",
+      "resolved": "https://registry.npmjs.org/@types/cors/-/cors-2.8.17.tgz",
+      "integrity": "sha512-8CGDvrBj1zgo2qE+oS3pOCyYNqCPryMWY2bGfwA0dcfopWGgxs+78df0Rs3rc9THP4JkOhLsAa+15VdpAqkcUA==",
+      "dependencies": {
+        "@types/node": "*"
       }
     },
-    "node_modules/npm/node_modules/@isaacs/brace-expansion": {
-      "version": "5.0.0",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/@types/node": {
+      "version": "22.13.13",
+      "resolved": "https://registry.npmjs.org/@types/node/-/node-22.13.13.tgz",
+      "integrity": "sha512-ClsL5nMwKaBRwPcCvH8E7+nU4GxHVx1axNvMZTFHMEfNI7oahimt26P5zjVCRrjiIWj6YFXfE1v3dEp94wLcGQ==",
       "dependencies": {
-        "@isaacs/balanced-match": "^4.0.1"
-      },
-      "engines": {
-        "node": "20 || >=22"
+        "undici-types": "~6.20.0"
       }
     },
-    "node_modules/npm/node_modules/@isaacs/fs-minipass": {
-      "version": "4.0.1",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/@types/webidl-conversions": {
+      "version": "7.0.3",
+      "resolved": "https://registry.npmjs.org/@types/webidl-conversions/-/webidl-conversions-7.0.3.tgz",
+      "integrity": "sha512-CiJJvcRtIgzadHCYXw7dqEnMNRjhGZlYK05Mj9OyktqV8uVT8fD2BFOB7S1uwBE3Kj2Z+4UyPmFw/Ixgw/LAlA=="
+    },
+    "node_modules/@types/whatwg-url": {
+      "version": "11.0.5",
+      "resolved": "https://registry.npmjs.org/@types/whatwg-url/-/whatwg-url-11.0.5.tgz",
+      "integrity": "sha512-coYR071JRaHa+xoEvvYqvnIHaVqaYrLPbsufM9BF63HkwI5Lgmy2QR8Q5K/lYDYo5AK82wOvSOS0UsLTpTG7uQ==",
+      "dependencies": {
+        "@types/webidl-conversions": "*"
+      }
+    },
+    "node_modules/accepts": {
+      "version": "1.3.8",
+      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
+      "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
       "dependencies": {
-        "minipass": "^7.0.4"
+        "mime-types": "~2.1.34",
+        "negotiator": "0.6.3"
       },
       "engines": {
-        "node": ">=18.0.0"
+        "node": ">= 0.6"
       }
     },
-    "node_modules/npm/node_modules/@isaacs/string-locale-compare": {
-      "version": "1.1.0",
-      "inBundle": true,
-      "license": "ISC"
+    "node_modules/agent-base": {
+      "version": "7.1.3",
+      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-7.1.3.tgz",
+      "integrity": "sha512-jRR5wdylq8CkOe6hei19GGZnxM6rBGwFl3Bg0YItGDimvjGtAvdZk4Pu6Cl4u4Igsws4a1fd1Vq3ezrhn4KmFw==",
+      "engines": {
+        "node": ">= 14"
+      }
     },
-    "node_modules/npm/node_modules/@npmcli/agent": {
-      "version": "4.0.0",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "agent-base": "^7.1.0",
-        "http-proxy-agent": "^7.0.0",
-        "https-proxy-agent": "^7.0.1",
-        "lru-cache": "^11.2.1",
-        "socks-proxy-agent": "^8.0.3"
-      },
+    "node_modules/array-flatten": {
+      "version": "1.1.1",
+      "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
+      "integrity": "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg=="
+    },
+    "node_modules/base64-js": {
+      "version": "1.5.1",
+      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
+      "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
+      "funding": [
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/feross"
+        },
+        {
+          "type": "patreon",
+          "url": "https://www.patreon.com/feross"
+        },
+        {
+          "type": "consulting",
+          "url": "https://feross.org/support"
+        }
+      ]
+    },
+    "node_modules/base64id": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/base64id/-/base64id-2.0.0.tgz",
+      "integrity": "sha512-lGe34o6EHj9y3Kts9R4ZYs/Gr+6N7MCaMlIFA3F1R2O5/m7K06AxfSeO5530PEERE6/WyEg3lsuyw4GHlPZHog==",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": "^4.5.0 || >= 5.9"
       }
     },
-    "node_modules/npm/node_modules/@npmcli/arborist": {
-      "version": "9.1.10",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "@isaacs/string-locale-compare": "^1.1.0",
-        "@npmcli/fs": "^5.0.0",
-        "@npmcli/installed-package-contents": "^4.0.0",
-        "@npmcli/map-workspaces": "^5.0.0",
-        "@npmcli/metavuln-calculator": "^9.0.2",
-        "@npmcli/name-from-folder": "^4.0.0",
-        "@npmcli/node-gyp": "^5.0.0",
-        "@npmcli/package-json": "^7.0.0",
-        "@npmcli/query": "^5.0.0",
-        "@npmcli/redact": "^4.0.0",
-        "@npmcli/run-script": "^10.0.0",
-        "bin-links": "^6.0.0",
-        "cacache": "^20.0.1",
-        "common-ancestor-path": "^2.0.0",
-        "hosted-git-info": "^9.0.0",
-        "json-stringify-nice": "^1.1.4",
-        "lru-cache": "^11.2.1",
-        "minimatch": "^10.0.3",
-        "nopt": "^9.0.0",
-        "npm-install-checks": "^8.0.0",
-        "npm-package-arg": "^13.0.0",
-        "npm-pick-manifest": "^11.0.1",
-        "npm-registry-fetch": "^19.0.0",
-        "pacote": "^21.0.2",
-        "parse-conflict-json": "^5.0.1",
-        "proc-log": "^6.0.0",
-        "proggy": "^4.0.0",
-        "promise-all-reject-late": "^1.0.0",
-        "promise-call-limit": "^3.0.1",
-        "semver": "^7.3.7",
-        "ssri": "^13.0.0",
-        "treeverse": "^3.0.0",
-        "walk-up-path": "^4.0.0"
-      },
-      "bin": {
-        "arborist": "bin/index.js"
-      },
+    "node_modules/bignumber.js": {
+      "version": "9.1.2",
+      "resolved": "https://registry.npmjs.org/bignumber.js/-/bignumber.js-9.1.2.tgz",
+      "integrity": "sha512-2/mKyZH9K85bzOEfhXDBFZTGd1CTs+5IHpeFQo9luiBG7hghdC851Pj2WAhb6E3R6b9tZj/XKhbg4fum+Kepug==",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": "*"
       }
     },
-    "node_modules/npm/node_modules/@npmcli/config": {
-      "version": "10.5.0",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/body-parser": {
+      "version": "1.20.3",
+      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.20.3.tgz",
+      "integrity": "sha512-7rAxByjUMqQ3/bHJy7D6OGXvx/MMc4IqBn/X0fcM1QUcAItpZrBEYhWGem+tzXH90c+G01ypMcYJBO9Y30203g==",
       "dependencies": {
-        "@npmcli/map-workspaces": "^5.0.0",
-        "@npmcli/package-json": "^7.0.0",
-        "ci-info": "^4.0.0",
-        "ini": "^6.0.0",
-        "nopt": "^9.0.0",
-        "proc-log": "^6.0.0",
-        "semver": "^7.3.5",
-        "walk-up-path": "^4.0.0"
+        "bytes": "3.1.2",
+        "content-type": "~1.0.5",
+        "debug": "2.6.9",
+        "depd": "2.0.0",
+        "destroy": "1.2.0",
+        "http-errors": "2.0.0",
+        "iconv-lite": "0.4.24",
+        "on-finished": "2.4.1",
+        "qs": "6.13.0",
+        "raw-body": "2.5.2",
+        "type-is": "~1.6.18",
+        "unpipe": "1.0.0"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.8",
+        "npm": "1.2.8000 || >= 1.4.16"
       }
     },
-    "node_modules/npm/node_modules/@npmcli/fs": {
-      "version": "5.0.0",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "semver": "^7.3.5"
-      },
+    "node_modules/bson": {
+      "version": "6.10.3",
+      "resolved": "https://registry.npmjs.org/bson/-/bson-6.10.3.tgz",
+      "integrity": "sha512-MTxGsqgYTwfshYWTRdmZRC+M7FnG1b4y7RO7p2k3X24Wq0yv1m77Wsj0BzlPzd/IowgESfsruQCUToa7vbOpPQ==",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">=16.20.1"
       }
     },
-    "node_modules/npm/node_modules/@npmcli/git": {
-      "version": "7.0.1",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "@npmcli/promise-spawn": "^9.0.0",
-        "ini": "^6.0.0",
-        "lru-cache": "^11.2.1",
-        "npm-pick-manifest": "^11.0.1",
-        "proc-log": "^6.0.0",
-        "promise-retry": "^2.0.1",
-        "semver": "^7.3.5",
-        "which": "^6.0.0"
-      },
+    "node_modules/buffer-equal-constant-time": {
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz",
+      "integrity": "sha512-zRpUiDwd/xk6ADqPMATG8vc9VPrkck7T07OIx0gnjmJAnHnTVXNQG3vfvWNuiZIkwu9KrKdA1iJKfsfTVxE6NA=="
+    },
+    "node_modules/bytes": {
+      "version": "3.1.2",
+      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
+      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.8"
       }
     },
-    "node_modules/npm/node_modules/@npmcli/installed-package-contents": {
-      "version": "4.0.0",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/call-bind-apply-helpers": {
+      "version": "1.0.2",
+      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
+      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
       "dependencies": {
-        "npm-bundled": "^5.0.0",
-        "npm-normalize-package-bin": "^5.0.0"
-      },
-      "bin": {
-        "installed-package-contents": "bin/index.js"
+        "es-errors": "^1.3.0",
+        "function-bind": "^1.1.2"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.4"
       }
     },
-    "node_modules/npm/node_modules/@npmcli/map-workspaces": {
-      "version": "5.0.3",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/call-bound": {
+      "version": "1.0.4",
+      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
+      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
       "dependencies": {
-        "@npmcli/name-from-folder": "^4.0.0",
-        "@npmcli/package-json": "^7.0.0",
-        "glob": "^13.0.0",
-        "minimatch": "^10.0.3"
+        "call-bind-apply-helpers": "^1.0.2",
+        "get-intrinsic": "^1.3.0"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.4"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
       }
     },
-    "node_modules/npm/node_modules/@npmcli/metavuln-calculator": {
-      "version": "9.0.3",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/content-disposition": {
+      "version": "0.5.4",
+      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
+      "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",
       "dependencies": {
-        "cacache": "^20.0.0",
-        "json-parse-even-better-errors": "^5.0.0",
-        "pacote": "^21.0.0",
-        "proc-log": "^6.0.0",
-        "semver": "^7.3.5"
+        "safe-buffer": "5.2.1"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.6"
       }
     },
-    "node_modules/npm/node_modules/@npmcli/name-from-folder": {
-      "version": "4.0.0",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/content-type": {
+      "version": "1.0.5",
+      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
+      "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.6"
       }
     },
-    "node_modules/npm/node_modules/@npmcli/node-gyp": {
-      "version": "5.0.0",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/cookie": {
+      "version": "0.7.1",
+      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.1.tgz",
+      "integrity": "sha512-6DnInpx7SJ2AK3+CTUE/ZM0vWTUboZCegxhC2xiIydHR9jNuTAASBrfEpHhiGOZw/nX51bHt6YQl8jsGo4y/0w==",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.6"
       }
     },
-    "node_modules/npm/node_modules/@npmcli/package-json": {
-      "version": "7.0.4",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/cookie-signature": {
+      "version": "1.0.6",
+      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
+      "integrity": "sha512-QADzlaHc8icV8I7vbaJXJwod9HWYp8uCqf1xa4OfNu1T7JVxQIrUgOWtHdNDtPiywmFbiS12VjotIXLrKM3orQ=="
+    },
+    "node_modules/cors": {
+      "version": "2.8.5",
+      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.5.tgz",
+      "integrity": "sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==",
       "dependencies": {
-        "@npmcli/git": "^7.0.0",
-        "glob": "^13.0.0",
-        "hosted-git-info": "^9.0.0",
-        "json-parse-even-better-errors": "^5.0.0",
-        "proc-log": "^6.0.0",
-        "semver": "^7.5.3",
-        "validate-npm-package-license": "^3.0.4"
+        "object-assign": "^4",
+        "vary": "^1"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.10"
       }
     },
-    "node_modules/npm/node_modules/@npmcli/promise-spawn": {
-      "version": "9.0.1",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/debug": {
+      "version": "2.6.9",
+      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
+      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
       "dependencies": {
-        "which": "^6.0.0"
-      },
-      "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "ms": "2.0.0"
       }
     },
-    "node_modules/npm/node_modules/@npmcli/query": {
-      "version": "5.0.0",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "postcss-selector-parser": "^7.0.0"
-      },
+    "node_modules/depd": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
+      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.8"
       }
     },
-    "node_modules/npm/node_modules/@npmcli/redact": {
-      "version": "4.0.0",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/destroy": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz",
+      "integrity": "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.8",
+        "npm": "1.2.8000 || >= 1.4.16"
       }
     },
-    "node_modules/npm/node_modules/@npmcli/run-script": {
-      "version": "10.0.3",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "@npmcli/node-gyp": "^5.0.0",
-        "@npmcli/package-json": "^7.0.0",
-        "@npmcli/promise-spawn": "^9.0.0",
-        "node-gyp": "^12.1.0",
-        "proc-log": "^6.0.0",
-        "which": "^6.0.0"
-      },
+    "node_modules/dotenv": {
+      "version": "17.2.2",
+      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-17.2.2.tgz",
+      "integrity": "sha512-Sf2LSQP+bOlhKWWyhFsn0UsfdK/kCWRv1iuA2gXAwt3dyNabr6QSj00I2V10pidqz69soatm9ZwZvpQMTIOd5Q==",
+      "license": "BSD-2-Clause",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">=12"
+      },
+      "funding": {
+        "url": "https://dotenvx.com"
       }
     },
-    "node_modules/npm/node_modules/@sigstore/bundle": {
-      "version": "4.0.0",
-      "inBundle": true,
-      "license": "Apache-2.0",
+    "node_modules/dunder-proto": {
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
+      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
       "dependencies": {
-        "@sigstore/protobuf-specs": "^0.5.0"
+        "call-bind-apply-helpers": "^1.0.1",
+        "es-errors": "^1.3.0",
+        "gopd": "^1.2.0"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.4"
       }
     },
-    "node_modules/npm/node_modules/@sigstore/core": {
-      "version": "3.1.0",
-      "inBundle": true,
-      "license": "Apache-2.0",
-      "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+    "node_modules/ecdsa-sig-formatter": {
+      "version": "1.0.11",
+      "resolved": "https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz",
+      "integrity": "sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==",
+      "dependencies": {
+        "safe-buffer": "^5.0.1"
       }
     },
-    "node_modules/npm/node_modules/@sigstore/protobuf-specs": {
-      "version": "0.5.0",
-      "inBundle": true,
-      "license": "Apache-2.0",
+    "node_modules/ee-first": {
+      "version": "1.1.1",
+      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
+      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow=="
+    },
+    "node_modules/encodeurl": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
+      "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
       "engines": {
-        "node": "^18.17.0 || >=20.5.0"
+        "node": ">= 0.8"
       }
     },
-    "node_modules/npm/node_modules/@sigstore/sign": {
-      "version": "4.1.0",
-      "inBundle": true,
-      "license": "Apache-2.0",
+    "node_modules/engine.io": {
+      "version": "6.6.4",
+      "resolved": "https://registry.npmjs.org/engine.io/-/engine.io-6.6.4.tgz",
+      "integrity": "sha512-ZCkIjSYNDyGn0R6ewHDtXgns/Zre/NT6Agvq1/WobF7JXgFff4SeDroKiCO3fNJreU9YG429Sc81o4w5ok/W5g==",
       "dependencies": {
-        "@sigstore/bundle": "^4.0.0",
-        "@sigstore/core": "^3.1.0",
-        "@sigstore/protobuf-specs": "^0.5.0",
-        "make-fetch-happen": "^15.0.3",
-        "proc-log": "^6.1.0",
-        "promise-retry": "^2.0.1"
+        "@types/cors": "^2.8.12",
+        "@types/node": ">=10.0.0",
+        "accepts": "~1.3.4",
+        "base64id": "2.0.0",
+        "cookie": "~0.7.2",
+        "cors": "~2.8.5",
+        "debug": "~4.3.1",
+        "engine.io-parser": "~5.2.1",
+        "ws": "~8.17.1"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">=10.2.0"
       }
     },
-    "node_modules/npm/node_modules/@sigstore/tuf": {
-      "version": "4.0.1",
-      "inBundle": true,
-      "license": "Apache-2.0",
+    "node_modules/engine.io-client": {
+      "version": "6.6.3",
+      "resolved": "https://registry.npmjs.org/engine.io-client/-/engine.io-client-6.6.3.tgz",
+      "integrity": "sha512-T0iLjnyNWahNyv/lcjS2y4oE358tVS/SYQNxYXGAJ9/GLgH4VCvOQ/mhTjqU88mLZCQgiG8RIegFHYCdVC+j5w==",
       "dependencies": {
-        "@sigstore/protobuf-specs": "^0.5.0",
-        "tuf-js": "^4.1.0"
-      },
-      "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "@socket.io/component-emitter": "~3.1.0",
+        "debug": "~4.3.1",
+        "engine.io-parser": "~5.2.1",
+        "ws": "~8.17.1",
+        "xmlhttprequest-ssl": "~2.1.1"
       }
     },
-    "node_modules/npm/node_modules/@sigstore/verify": {
-      "version": "3.1.0",
-      "inBundle": true,
-      "license": "Apache-2.0",
+    "node_modules/engine.io-client/node_modules/debug": {
+      "version": "4.3.7",
+      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.7.tgz",
+      "integrity": "sha512-Er2nc/H7RrMXZBFCEim6TCmMk02Z8vLC2Rbi1KEBggpo0fS6l0S1nnapwmIi3yW/+GOJap1Krg4w0Hg80oCqgQ==",
       "dependencies": {
-        "@sigstore/bundle": "^4.0.0",
-        "@sigstore/core": "^3.1.0",
-        "@sigstore/protobuf-specs": "^0.5.0"
+        "ms": "^2.1.3"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">=6.0"
+      },
+      "peerDependenciesMeta": {
+        "supports-color": {
+          "optional": true
+        }
       }
     },
-    "node_modules/npm/node_modules/@tufjs/canonical-json": {
-      "version": "2.0.0",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/engine.io-client/node_modules/ms": {
+      "version": "2.1.3",
+      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
+      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
+    },
+    "node_modules/engine.io-parser": {
+      "version": "5.2.3",
+      "resolved": "https://registry.npmjs.org/engine.io-parser/-/engine.io-parser-5.2.3.tgz",
+      "integrity": "sha512-HqD3yTBfnBxIrbnM1DoD6Pcq8NECnh8d4As1Qgh0z5Gg3jRRIqijury0CL3ghu/edArpUYiYqQiDUQBIs4np3Q==",
       "engines": {
-        "node": "^16.14.0 || >=18.0.0"
+        "node": ">=10.0.0"
       }
     },
-    "node_modules/npm/node_modules/@tufjs/models": {
-      "version": "4.1.0",
-      "inBundle": true,
-      "license": "MIT",
-      "dependencies": {
-        "@tufjs/canonical-json": "2.0.0",
-        "minimatch": "^10.1.1"
-      },
+    "node_modules/engine.io/node_modules/cookie": {
+      "version": "0.7.2",
+      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
+      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.6"
       }
     },
-    "node_modules/npm/node_modules/abbrev": {
-      "version": "4.0.0",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/engine.io/node_modules/debug": {
+      "version": "4.3.7",
+      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.7.tgz",
+      "integrity": "sha512-Er2nc/H7RrMXZBFCEim6TCmMk02Z8vLC2Rbi1KEBggpo0fS6l0S1nnapwmIi3yW/+GOJap1Krg4w0Hg80oCqgQ==",
+      "dependencies": {
+        "ms": "^2.1.3"
+      },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">=6.0"
+      },
+      "peerDependenciesMeta": {
+        "supports-color": {
+          "optional": true
+        }
       }
     },
-    "node_modules/npm/node_modules/agent-base": {
-      "version": "7.1.4",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/engine.io/node_modules/ms": {
+      "version": "2.1.3",
+      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
+      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
+    },
+    "node_modules/es-define-property": {
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
+      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
       "engines": {
-        "node": ">= 14"
+        "node": ">= 0.4"
       }
     },
-    "node_modules/npm/node_modules/ansi-regex": {
-      "version": "5.0.1",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/es-errors": {
+      "version": "1.3.0",
+      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
+      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
       "engines": {
-        "node": ">=8"
+        "node": ">= 0.4"
       }
     },
-    "node_modules/npm/node_modules/aproba": {
-      "version": "2.1.0",
-      "inBundle": true,
-      "license": "ISC"
-    },
-    "node_modules/npm/node_modules/archy": {
-      "version": "1.0.0",
-      "inBundle": true,
-      "license": "MIT"
-    },
-    "node_modules/npm/node_modules/bin-links": {
-      "version": "6.0.0",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/es-object-atoms": {
+      "version": "1.1.1",
+      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
+      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
       "dependencies": {
-        "cmd-shim": "^8.0.0",
-        "npm-normalize-package-bin": "^5.0.0",
-        "proc-log": "^6.0.0",
-        "read-cmd-shim": "^6.0.0",
-        "write-file-atomic": "^7.0.0"
+        "es-errors": "^1.3.0"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.4"
       }
     },
-    "node_modules/npm/node_modules/binary-extensions": {
-      "version": "3.1.0",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/escape-html": {
+      "version": "1.0.3",
+      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
+      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow=="
+    },
+    "node_modules/etag": {
+      "version": "1.8.1",
+      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
+      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
       "engines": {
-        "node": ">=18.20"
+        "node": ">= 0.6"
+      }
+    },
+    "node_modules/express": {
+      "version": "4.21.2",
+      "resolved": "https://registry.npmjs.org/express/-/express-4.21.2.tgz",
+      "integrity": "sha512-28HqgMZAmih1Czt9ny7qr6ek2qddF4FclbMzwhCREB6OFfH+rXAnuNCwo1/wFvrtbgsQDb4kSbX9de9lFbrXnA==",
+      "dependencies": {
+        "accepts": "~1.3.8",
+        "array-flatten": "1.1.1",
+        "body-parser": "1.20.3",
+        "content-disposition": "0.5.4",
+        "content-type": "~1.0.4",
+        "cookie": "0.7.1",
+        "cookie-signature": "1.0.6",
+        "debug": "2.6.9",
+        "depd": "2.0.0",
+        "encodeurl": "~2.0.0",
+        "escape-html": "~1.0.3",
+        "etag": "~1.8.1",
+        "finalhandler": "1.3.1",
+        "fresh": "0.5.2",
+        "http-errors": "2.0.0",
+        "merge-descriptors": "1.0.3",
+        "methods": "~1.1.2",
+        "on-finished": "2.4.1",
+        "parseurl": "~1.3.3",
+        "path-to-regexp": "0.1.12",
+        "proxy-addr": "~2.0.7",
+        "qs": "6.13.0",
+        "range-parser": "~1.2.1",
+        "safe-buffer": "5.2.1",
+        "send": "0.19.0",
+        "serve-static": "1.16.2",
+        "setprototypeof": "1.2.0",
+        "statuses": "2.0.1",
+        "type-is": "~1.6.18",
+        "utils-merge": "1.0.1",
+        "vary": "~1.1.2"
+      },
+      "engines": {
+        "node": ">= 0.10.0"
       },
       "funding": {
-        "url": "https://github.com/sponsors/sindresorhus"
+        "type": "opencollective",
+        "url": "https://opencollective.com/express"
       }
     },
-    "node_modules/npm/node_modules/cacache": {
-      "version": "20.0.3",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/extend": {
+      "version": "3.0.2",
+      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
+      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g=="
+    },
+    "node_modules/finalhandler": {
+      "version": "1.3.1",
+      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.3.1.tgz",
+      "integrity": "sha512-6BN9trH7bp3qvnrRyzsBz+g3lZxTNZTbVO2EV1CS0WIcDbawYVdYvGflME/9QP0h0pYlCDBCTjYa9nZzMDpyxQ==",
       "dependencies": {
-        "@npmcli/fs": "^5.0.0",
-        "fs-minipass": "^3.0.0",
-        "glob": "^13.0.0",
-        "lru-cache": "^11.1.0",
-        "minipass": "^7.0.3",
-        "minipass-collect": "^2.0.1",
-        "minipass-flush": "^1.0.5",
-        "minipass-pipeline": "^1.2.4",
-        "p-map": "^7.0.2",
-        "ssri": "^13.0.0",
-        "unique-filename": "^5.0.0"
+        "debug": "2.6.9",
+        "encodeurl": "~2.0.0",
+        "escape-html": "~1.0.3",
+        "on-finished": "2.4.1",
+        "parseurl": "~1.3.3",
+        "statuses": "2.0.1",
+        "unpipe": "~1.0.0"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.8"
       }
     },
-    "node_modules/npm/node_modules/chalk": {
-      "version": "5.6.2",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/forwarded": {
+      "version": "0.2.0",
+      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
+      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
       "engines": {
-        "node": "^12.17.0 || ^14.13 || >=16.0.0"
-      },
-      "funding": {
-        "url": "https://github.com/chalk/chalk?sponsor=1"
+        "node": ">= 0.6"
       }
     },
-    "node_modules/npm/node_modules/chownr": {
-      "version": "3.0.0",
-      "inBundle": true,
-      "license": "BlueOak-1.0.0",
+    "node_modules/fresh": {
+      "version": "0.5.2",
+      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
+      "integrity": "sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q==",
       "engines": {
-        "node": ">=18"
+        "node": ">= 0.6"
       }
     },
-    "node_modules/npm/node_modules/ci-info": {
-      "version": "4.3.1",
-      "funding": [
-        {
-          "type": "github",
-          "url": "https://github.com/sponsors/sibiraj-s"
-        }
-      ],
-      "inBundle": true,
-      "license": "MIT",
-      "engines": {
-        "node": ">=8"
+    "node_modules/function-bind": {
+      "version": "1.1.2",
+      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
+      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
       }
     },
-    "node_modules/npm/node_modules/cidr-regex": {
-      "version": "5.0.1",
-      "inBundle": true,
-      "license": "BSD-2-Clause",
+    "node_modules/gaxios": {
+      "version": "6.7.1",
+      "resolved": "https://registry.npmjs.org/gaxios/-/gaxios-6.7.1.tgz",
+      "integrity": "sha512-LDODD4TMYx7XXdpwxAVRAIAuB0bzv0s+ywFonY46k126qzQHT9ygyoa9tncmOiQmmDrik65UYsEkv3lbfqQ3yQ==",
       "dependencies": {
-        "ip-regex": "5.0.0"
+        "extend": "^3.0.2",
+        "https-proxy-agent": "^7.0.1",
+        "is-stream": "^2.0.0",
+        "node-fetch": "^2.6.9",
+        "uuid": "^9.0.1"
       },
       "engines": {
-        "node": ">=20"
+        "node": ">=14"
       }
     },
-    "node_modules/npm/node_modules/cli-columns": {
-      "version": "4.0.0",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/gcp-metadata": {
+      "version": "5.3.0",
+      "resolved": "https://registry.npmjs.org/gcp-metadata/-/gcp-metadata-5.3.0.tgz",
+      "integrity": "sha512-FNTkdNEnBdlqF2oatizolQqNANMrcqJt6AAYt99B3y1aLLC8Hc5IOBb+ZnnzllodEEf6xMBp6wRcBbc16fa65w==",
+      "optional": true,
+      "peer": true,
       "dependencies": {
-        "string-width": "^4.2.3",
-        "strip-ansi": "^6.0.1"
+        "gaxios": "^5.0.0",
+        "json-bigint": "^1.0.0"
       },
       "engines": {
-        "node": ">= 10"
-      }
-    },
-    "node_modules/npm/node_modules/cmd-shim": {
-      "version": "8.0.0",
-      "inBundle": true,
-      "license": "ISC",
-      "engines": {
-        "node": "^20.17.0 || >=22.9.0"
-      }
-    },
-    "node_modules/npm/node_modules/common-ancestor-path": {
-      "version": "2.0.0",
-      "inBundle": true,
-      "license": "BlueOak-1.0.0",
-      "engines": {
-        "node": ">= 18"
+        "node": ">=12"
       }
     },
-    "node_modules/npm/node_modules/cssesc": {
-      "version": "3.0.0",
-      "inBundle": true,
-      "license": "MIT",
-      "bin": {
-        "cssesc": "bin/cssesc"
+    "node_modules/gcp-metadata/node_modules/agent-base": {
+      "version": "6.0.2",
+      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",
+      "integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",
+      "optional": true,
+      "peer": true,
+      "dependencies": {
+        "debug": "4"
       },
       "engines": {
-        "node": ">=4"
+        "node": ">= 6.0.0"
       }
     },
-    "node_modules/npm/node_modules/debug": {
-      "version": "4.4.3",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/gcp-metadata/node_modules/debug": {
+      "version": "4.4.0",
+      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.0.tgz",
+      "integrity": "sha512-6WTZ/IxCY/T6BALoZHaE4ctp9xm+Z5kY/pzYaCHRFeyVhojxlrm+46y68HA6hr0TcwEssoxNiDEUJQjfPZ/RYA==",
+      "optional": true,
+      "peer": true,
       "dependencies": {
         "ms": "^2.1.3"
       },
@@ -699,1255 +589,1071 @@
         }
       }
     },
-    "node_modules/npm/node_modules/diff": {
-      "version": "8.0.3",
-      "inBundle": true,
-      "license": "BSD-3-Clause",
+    "node_modules/gcp-metadata/node_modules/gaxios": {
+      "version": "5.1.3",
+      "resolved": "https://registry.npmjs.org/gaxios/-/gaxios-5.1.3.tgz",
+      "integrity": "sha512-95hVgBRgEIRQQQHIbnxBXeHbW4TqFk4ZDJW7wmVtvYar72FdhRIo1UGOLS2eRAKCPEdPBWu+M7+A33D9CdX9rA==",
+      "optional": true,
+      "peer": true,
+      "dependencies": {
+        "extend": "^3.0.2",
+        "https-proxy-agent": "^5.0.0",
+        "is-stream": "^2.0.0",
+        "node-fetch": "^2.6.9"
+      },
       "engines": {
-        "node": ">=0.3.1"
+        "node": ">=12"
       }
     },
-    "node_modules/npm/node_modules/emoji-regex": {
-      "version": "8.0.0",
-      "inBundle": true,
-      "license": "MIT"
-    },
-    "node_modules/npm/node_modules/encoding": {
-      "version": "0.1.13",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/gcp-metadata/node_modules/https-proxy-agent": {
+      "version": "5.0.1",
+      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.1.tgz",
+      "integrity": "sha512-dFcAjpTQFgoLMzC2VwU+C/CbS7uRL0lWmxDITmqm7C+7F0Odmj6s9l6alZc6AELXhrnggM2CeWSXHGOdX2YtwA==",
       "optional": true,
+      "peer": true,
       "dependencies": {
-        "iconv-lite": "^0.6.2"
-      }
-    },
-    "node_modules/npm/node_modules/env-paths": {
-      "version": "2.2.1",
-      "inBundle": true,
-      "license": "MIT",
+        "agent-base": "6",
+        "debug": "4"
+      },
       "engines": {
-        "node": ">=6"
+        "node": ">= 6"
       }
     },
-    "node_modules/npm/node_modules/err-code": {
-      "version": "2.0.3",
-      "inBundle": true,
-      "license": "MIT"
-    },
-    "node_modules/npm/node_modules/exponential-backoff": {
-      "version": "3.1.3",
-      "inBundle": true,
-      "license": "Apache-2.0"
+    "node_modules/gcp-metadata/node_modules/ms": {
+      "version": "2.1.3",
+      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
+      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
+      "optional": true,
+      "peer": true
     },
-    "node_modules/npm/node_modules/fastest-levenshtein": {
-      "version": "1.0.16",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/get-intrinsic": {
+      "version": "1.3.0",
+      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
+      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
+      "dependencies": {
+        "call-bind-apply-helpers": "^1.0.2",
+        "es-define-property": "^1.0.1",
+        "es-errors": "^1.3.0",
+        "es-object-atoms": "^1.1.1",
+        "function-bind": "^1.1.2",
+        "get-proto": "^1.0.1",
+        "gopd": "^1.2.0",
+        "has-symbols": "^1.1.0",
+        "hasown": "^2.0.2",
+        "math-intrinsics": "^1.1.0"
+      },
       "engines": {
-        "node": ">= 4.9.1"
+        "node": ">= 0.4"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
       }
     },
-    "node_modules/npm/node_modules/fs-minipass": {
-      "version": "3.0.3",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/get-proto": {
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
+      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
       "dependencies": {
-        "minipass": "^7.0.3"
+        "dunder-proto": "^1.0.1",
+        "es-object-atoms": "^1.0.0"
       },
       "engines": {
-        "node": "^14.17.0 || ^16.13.0 || >=18.0.0"
+        "node": ">= 0.4"
       }
     },
-    "node_modules/npm/node_modules/glob": {
-      "version": "13.0.0",
-      "inBundle": true,
-      "license": "BlueOak-1.0.0",
+    "node_modules/google-auth-library": {
+      "version": "9.15.1",
+      "resolved": "https://registry.npmjs.org/google-auth-library/-/google-auth-library-9.15.1.tgz",
+      "integrity": "sha512-Jb6Z0+nvECVz+2lzSMt9u98UsoakXxA2HGHMCxh+so3n90XgYWkq5dur19JAJV7ONiJY22yBTyJB1TSkvPq9Ng==",
       "dependencies": {
-        "minimatch": "^10.1.1",
-        "minipass": "^7.1.2",
-        "path-scurry": "^2.0.0"
+        "base64-js": "^1.3.0",
+        "ecdsa-sig-formatter": "^1.0.11",
+        "gaxios": "^6.1.1",
+        "gcp-metadata": "^6.1.0",
+        "gtoken": "^7.0.0",
+        "jws": "^4.0.0"
       },
       "engines": {
-        "node": "20 || >=22"
-      },
-      "funding": {
-        "url": "https://github.com/sponsors/isaacs"
+        "node": ">=14"
       }
     },
-    "node_modules/npm/node_modules/graceful-fs": {
-      "version": "4.2.11",
-      "inBundle": true,
-      "license": "ISC"
-    },
-    "node_modules/npm/node_modules/hosted-git-info": {
-      "version": "9.0.2",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/google-auth-library/node_modules/gcp-metadata": {
+      "version": "6.1.1",
+      "resolved": "https://registry.npmjs.org/gcp-metadata/-/gcp-metadata-6.1.1.tgz",
+      "integrity": "sha512-a4tiq7E0/5fTjxPAaH4jpjkSv/uCaU2p5KC6HVGrvl0cDjA8iBZv4vv1gyzlmK0ZUKqwpOyQMKzZQe3lTit77A==",
       "dependencies": {
-        "lru-cache": "^11.1.0"
+        "gaxios": "^6.1.1",
+        "google-logging-utils": "^0.0.2",
+        "json-bigint": "^1.0.0"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">=14"
       }
     },
-    "node_modules/npm/node_modules/http-cache-semantics": {
-      "version": "4.2.0",
-      "inBundle": true,
-      "license": "BSD-2-Clause"
+    "node_modules/google-logging-utils": {
+      "version": "0.0.2",
+      "resolved": "https://registry.npmjs.org/google-logging-utils/-/google-logging-utils-0.0.2.tgz",
+      "integrity": "sha512-NEgUnEcBiP5HrPzufUkBzJOD/Sxsco3rLNo1F1TNf7ieU8ryUzBhqba8r756CjLX7rn3fHl6iLEwPYuqpoKgQQ==",
+      "engines": {
+        "node": ">=14"
+      }
     },
-    "node_modules/npm/node_modules/http-proxy-agent": {
-      "version": "7.0.2",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/googleapis": {
+      "version": "144.0.0",
+      "resolved": "https://registry.npmjs.org/googleapis/-/googleapis-144.0.0.tgz",
+      "integrity": "sha512-ELcWOXtJxjPX4vsKMh+7V+jZvgPwYMlEhQFiu2sa9Qmt5veX8nwXPksOWGGN6Zk4xCiLygUyaz7xGtcMO+Onxw==",
       "dependencies": {
-        "agent-base": "^7.1.0",
-        "debug": "^4.3.4"
+        "google-auth-library": "^9.0.0",
+        "googleapis-common": "^7.0.0"
       },
       "engines": {
-        "node": ">= 14"
+        "node": ">=14.0.0"
       }
     },
-    "node_modules/npm/node_modules/https-proxy-agent": {
-      "version": "7.0.6",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/googleapis-common": {
+      "version": "7.2.0",
+      "resolved": "https://registry.npmjs.org/googleapis-common/-/googleapis-common-7.2.0.tgz",
+      "integrity": "sha512-/fhDZEJZvOV3X5jmD+fKxMqma5q2Q9nZNSF3kn1F18tpxmA86BcTxAGBQdM0N89Z3bEaIs+HVznSmFJEAmMTjA==",
       "dependencies": {
-        "agent-base": "^7.1.2",
-        "debug": "4"
+        "extend": "^3.0.2",
+        "gaxios": "^6.0.3",
+        "google-auth-library": "^9.7.0",
+        "qs": "^6.7.0",
+        "url-template": "^2.0.8",
+        "uuid": "^9.0.0"
       },
       "engines": {
-        "node": ">= 14"
+        "node": ">=14.0.0"
       }
     },
-    "node_modules/npm/node_modules/iconv-lite": {
-      "version": "0.6.3",
-      "inBundle": true,
-      "license": "MIT",
-      "optional": true,
-      "dependencies": {
-        "safer-buffer": ">= 2.1.2 < 3.0.0"
-      },
+    "node_modules/gopd": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
+      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
       "engines": {
-        "node": ">=0.10.0"
+        "node": ">= 0.4"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
       }
     },
-    "node_modules/npm/node_modules/ignore-walk": {
-      "version": "8.0.0",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/gtoken": {
+      "version": "7.1.0",
+      "resolved": "https://registry.npmjs.org/gtoken/-/gtoken-7.1.0.tgz",
+      "integrity": "sha512-pCcEwRi+TKpMlxAQObHDQ56KawURgyAf6jtIY046fJ5tIv3zDe/LEIubckAO8fj6JnAxLdmWkUfNyulQ2iKdEw==",
       "dependencies": {
-        "minimatch": "^10.0.3"
+        "gaxios": "^6.0.0",
+        "jws": "^4.0.0"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">=14.0.0"
       }
     },
-    "node_modules/npm/node_modules/imurmurhash": {
-      "version": "0.1.4",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/has-symbols": {
+      "version": "1.1.0",
+      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
+      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
       "engines": {
-        "node": ">=0.8.19"
+        "node": ">= 0.4"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
       }
     },
-    "node_modules/npm/node_modules/ini": {
-      "version": "6.0.0",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/hasown": {
+      "version": "2.0.2",
+      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
+      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
+      "dependencies": {
+        "function-bind": "^1.1.2"
+      },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.4"
       }
     },
-    "node_modules/npm/node_modules/init-package-json": {
-      "version": "8.2.4",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/http-errors": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",
+      "integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",
       "dependencies": {
-        "@npmcli/package-json": "^7.0.0",
-        "npm-package-arg": "^13.0.0",
-        "promzard": "^3.0.1",
-        "read": "^5.0.1",
-        "semver": "^7.7.2",
-        "validate-npm-package-license": "^3.0.4",
-        "validate-npm-package-name": "^7.0.0"
+        "depd": "2.0.0",
+        "inherits": "2.0.4",
+        "setprototypeof": "1.2.0",
+        "statuses": "2.0.1",
+        "toidentifier": "1.0.1"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.8"
       }
     },
-    "node_modules/npm/node_modules/ip-address": {
-      "version": "10.1.0",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/https-proxy-agent": {
+      "version": "7.0.6",
+      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-7.0.6.tgz",
+      "integrity": "sha512-vK9P5/iUfdl95AI+JVyUuIcVtd4ofvtrOr3HNtM2yxC9bnMbEdp3x01OhQNnjb8IJYi38VlTE3mBXwcfvywuSw==",
+      "dependencies": {
+        "agent-base": "^7.1.2",
+        "debug": "4"
+      },
       "engines": {
-        "node": ">= 12"
+        "node": ">= 14"
       }
     },
-    "node_modules/npm/node_modules/ip-regex": {
-      "version": "5.0.0",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/https-proxy-agent/node_modules/debug": {
+      "version": "4.4.0",
+      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.0.tgz",
+      "integrity": "sha512-6WTZ/IxCY/T6BALoZHaE4ctp9xm+Z5kY/pzYaCHRFeyVhojxlrm+46y68HA6hr0TcwEssoxNiDEUJQjfPZ/RYA==",
+      "dependencies": {
+        "ms": "^2.1.3"
+      },
       "engines": {
-        "node": "^12.20.0 || ^14.13.1 || >=16.0.0"
+        "node": ">=6.0"
       },
-      "funding": {
-        "url": "https://github.com/sponsors/sindresorhus"
+      "peerDependenciesMeta": {
+        "supports-color": {
+          "optional": true
+        }
       }
     },
-    "node_modules/npm/node_modules/is-cidr": {
-      "version": "6.0.1",
-      "inBundle": true,
-      "license": "BSD-2-Clause",
+    "node_modules/https-proxy-agent/node_modules/ms": {
+      "version": "2.1.3",
+      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
+      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
+    },
+    "node_modules/iconv-lite": {
+      "version": "0.4.24",
+      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
+      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
       "dependencies": {
-        "cidr-regex": "5.0.1"
+        "safer-buffer": ">= 2.1.2 < 3"
       },
       "engines": {
-        "node": ">=20"
+        "node": ">=0.10.0"
       }
     },
-    "node_modules/npm/node_modules/is-fullwidth-code-point": {
-      "version": "3.0.0",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/inherits": {
+      "version": "2.0.4",
+      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
+      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
+    },
+    "node_modules/ipaddr.js": {
+      "version": "1.9.1",
+      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
+      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
       "engines": {
-        "node": ">=8"
+        "node": ">= 0.10"
       }
     },
-    "node_modules/npm/node_modules/isexe": {
-      "version": "3.1.1",
-      "inBundle": true,
-      "license": "ISC",
-      "engines": {
-        "node": ">=16"
-      }
-    },
-    "node_modules/npm/node_modules/json-parse-even-better-errors": {
-      "version": "5.0.0",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/is-stream": {
+      "version": "2.0.1",
+      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.1.tgz",
+      "integrity": "sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg==",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
-      }
-    },
-    "node_modules/npm/node_modules/json-stringify-nice": {
-      "version": "1.1.4",
-      "inBundle": true,
-      "license": "ISC",
+        "node": ">=8"
+      },
       "funding": {
-        "url": "https://github.com/sponsors/isaacs"
+        "url": "https://github.com/sponsors/sindresorhus"
       }
     },
-    "node_modules/npm/node_modules/jsonparse": {
-      "version": "1.3.1",
-      "engines": [
-        "node >= 0.2.0"
-      ],
-      "inBundle": true,
-      "license": "MIT"
-    },
-    "node_modules/npm/node_modules/just-diff": {
-      "version": "6.0.2",
-      "inBundle": true,
-      "license": "MIT"
-    },
-    "node_modules/npm/node_modules/just-diff-apply": {
-      "version": "5.5.0",
-      "inBundle": true,
-      "license": "MIT"
-    },
-    "node_modules/npm/node_modules/libnpmaccess": {
-      "version": "10.0.3",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/json-bigint": {
+      "version": "1.0.0",
+      "resolved": "https://registry.npmjs.org/json-bigint/-/json-bigint-1.0.0.tgz",
+      "integrity": "sha512-SiPv/8VpZuWbvLSMtTDU8hEfrZWg/mH/nV/b4o0CYbSxu1UIQPLdwKOCIyLQX+VIPO5vrLX3i8qtqFyhdPSUSQ==",
       "dependencies": {
-        "npm-package-arg": "^13.0.0",
-        "npm-registry-fetch": "^19.0.0"
-      },
-      "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "bignumber.js": "^9.0.0"
       }
     },
-    "node_modules/npm/node_modules/libnpmdiff": {
-      "version": "8.0.13",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/jwa": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/jwa/-/jwa-2.0.0.tgz",
+      "integrity": "sha512-jrZ2Qx916EA+fq9cEAeCROWPTfCwi1IVHqT2tapuqLEVVDKFDENFw1oL+MwrTvH6msKxsd1YTDVw6uKEcsrLEA==",
       "dependencies": {
-        "@npmcli/arborist": "^9.1.10",
-        "@npmcli/installed-package-contents": "^4.0.0",
-        "binary-extensions": "^3.0.0",
-        "diff": "^8.0.2",
-        "minimatch": "^10.0.3",
-        "npm-package-arg": "^13.0.0",
-        "pacote": "^21.0.2",
-        "tar": "^7.5.1"
-      },
-      "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "buffer-equal-constant-time": "1.0.1",
+        "ecdsa-sig-formatter": "1.0.11",
+        "safe-buffer": "^5.0.1"
       }
     },
-    "node_modules/npm/node_modules/libnpmexec": {
-      "version": "10.1.12",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/jws": {
+      "version": "4.0.0",
+      "resolved": "https://registry.npmjs.org/jws/-/jws-4.0.0.tgz",
+      "integrity": "sha512-KDncfTmOZoOMTFG4mBlG0qUIOlc03fmzH+ru6RgYVZhPkyiy/92Owlt/8UEN+a4TXR1FQetfIpJE8ApdvdVxTg==",
       "dependencies": {
-        "@npmcli/arborist": "^9.1.10",
-        "@npmcli/package-json": "^7.0.0",
-        "@npmcli/run-script": "^10.0.0",
-        "ci-info": "^4.0.0",
-        "npm-package-arg": "^13.0.0",
-        "pacote": "^21.0.2",
-        "proc-log": "^6.0.0",
-        "promise-retry": "^2.0.1",
-        "read": "^5.0.1",
-        "semver": "^7.3.7",
-        "signal-exit": "^4.1.0",
-        "walk-up-path": "^4.0.0"
-      },
-      "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "jwa": "^2.0.0",
+        "safe-buffer": "^5.0.1"
       }
     },
-    "node_modules/npm/node_modules/libnpmfund": {
-      "version": "7.0.13",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "@npmcli/arborist": "^9.1.10"
-      },
+    "node_modules/kareem": {
+      "version": "2.6.3",
+      "resolved": "https://registry.npmjs.org/kareem/-/kareem-2.6.3.tgz",
+      "integrity": "sha512-C3iHfuGUXK2u8/ipq9LfjFfXFxAZMQJJq7vLS45r3D9Y2xQ/m4S8zaR4zMLFWh9AsNPXmcFfUDhTEO8UIC/V6Q==",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">=12.0.0"
       }
     },
-    "node_modules/npm/node_modules/libnpmorg": {
-      "version": "8.0.1",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "aproba": "^2.0.0",
-        "npm-registry-fetch": "^19.0.0"
-      },
+    "node_modules/math-intrinsics": {
+      "version": "1.1.0",
+      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
+      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.4"
       }
     },
-    "node_modules/npm/node_modules/libnpmpack": {
-      "version": "9.0.13",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "@npmcli/arborist": "^9.1.10",
-        "@npmcli/run-script": "^10.0.0",
-        "npm-package-arg": "^13.0.0",
-        "pacote": "^21.0.2"
-      },
+    "node_modules/media-typer": {
+      "version": "0.3.0",
+      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
+      "integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.6"
       }
     },
-    "node_modules/npm/node_modules/libnpmpublish": {
-      "version": "11.1.3",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "@npmcli/package-json": "^7.0.0",
-        "ci-info": "^4.0.0",
-        "npm-package-arg": "^13.0.0",
-        "npm-registry-fetch": "^19.0.0",
-        "proc-log": "^6.0.0",
-        "semver": "^7.3.7",
-        "sigstore": "^4.0.0",
-        "ssri": "^13.0.0"
-      },
-      "engines": {
-        "node": "^20.17.0 || >=22.9.0"
-      }
+    "node_modules/memory-pager": {
+      "version": "1.5.0",
+      "resolved": "https://registry.npmjs.org/memory-pager/-/memory-pager-1.5.0.tgz",
+      "integrity": "sha512-ZS4Bp4r/Zoeq6+NLJpP+0Zzm0pR8whtGPf1XExKLJBAczGMnSi3It14OiNCStjQjM6NU1okjQGSxgEZN8eBYKg=="
     },
-    "node_modules/npm/node_modules/libnpmsearch": {
-      "version": "9.0.1",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "npm-registry-fetch": "^19.0.0"
-      },
-      "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+    "node_modules/merge-descriptors": {
+      "version": "1.0.3",
+      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.3.tgz",
+      "integrity": "sha512-gaNvAS7TZ897/rVaZ0nMtAyxNyi/pdbjbAwUpFQpN70GqnVfOiXpeUUMKRBmzXaSQ8DdTX4/0ms62r2K+hE6mQ==",
+      "funding": {
+        "url": "https://github.com/sponsors/sindresorhus"
       }
     },
-    "node_modules/npm/node_modules/libnpmteam": {
-      "version": "8.0.2",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "aproba": "^2.0.0",
-        "npm-registry-fetch": "^19.0.0"
-      },
+    "node_modules/methods": {
+      "version": "1.1.2",
+      "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
+      "integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.6"
       }
     },
-    "node_modules/npm/node_modules/libnpmversion": {
-      "version": "8.0.3",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "@npmcli/git": "^7.0.0",
-        "@npmcli/run-script": "^10.0.0",
-        "json-parse-even-better-errors": "^5.0.0",
-        "proc-log": "^6.0.0",
-        "semver": "^7.3.7"
+    "node_modules/mime": {
+      "version": "1.6.0",
+      "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
+      "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
+      "bin": {
+        "mime": "cli.js"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">=4"
       }
     },
-    "node_modules/npm/node_modules/lru-cache": {
-      "version": "11.2.4",
-      "inBundle": true,
-      "license": "BlueOak-1.0.0",
+    "node_modules/mime-db": {
+      "version": "1.52.0",
+      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
+      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
       "engines": {
-        "node": "20 || >=22"
+        "node": ">= 0.6"
       }
     },
-    "node_modules/npm/node_modules/make-fetch-happen": {
-      "version": "15.0.3",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/mime-types": {
+      "version": "2.1.35",
+      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
+      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
       "dependencies": {
-        "@npmcli/agent": "^4.0.0",
-        "cacache": "^20.0.1",
-        "http-cache-semantics": "^4.1.1",
-        "minipass": "^7.0.2",
-        "minipass-fetch": "^5.0.0",
-        "minipass-flush": "^1.0.5",
-        "minipass-pipeline": "^1.2.4",
-        "negotiator": "^1.0.0",
-        "proc-log": "^6.0.0",
-        "promise-retry": "^2.0.1",
-        "ssri": "^13.0.0"
+        "mime-db": "1.52.0"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.6"
       }
     },
-    "node_modules/npm/node_modules/minimatch": {
-      "version": "10.1.1",
-      "inBundle": true,
-      "license": "BlueOak-1.0.0",
+    "node_modules/mongodb": {
+      "version": "6.15.0",
+      "resolved": "https://registry.npmjs.org/mongodb/-/mongodb-6.15.0.tgz",
+      "integrity": "sha512-ifBhQ0rRzHDzqp9jAQP6OwHSH7dbYIQjD3SbJs9YYk9AikKEettW/9s/tbSFDTpXcRbF+u1aLrhHxDFaYtZpFQ==",
       "dependencies": {
-        "@isaacs/brace-expansion": "^5.0.0"
+        "@mongodb-js/saslprep": "^1.1.9",
+        "bson": "^6.10.3",
+        "mongodb-connection-string-url": "^3.0.0"
       },
       "engines": {
-        "node": "20 || >=22"
+        "node": ">=16.20.1"
       },
-      "funding": {
-        "url": "https://github.com/sponsors/isaacs"
-      }
-    },
-    "node_modules/npm/node_modules/minipass": {
-      "version": "7.1.2",
-      "inBundle": true,
-      "license": "ISC",
-      "engines": {
-        "node": ">=16 || 14 >=14.17"
-      }
-    },
-    "node_modules/npm/node_modules/minipass-collect": {
-      "version": "2.0.1",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "minipass": "^7.0.3"
+      "peerDependencies": {
+        "@aws-sdk/credential-providers": "^3.188.0",
+        "@mongodb-js/zstd": "^1.1.0 || ^2.0.0",
+        "gcp-metadata": "^5.2.0",
+        "kerberos": "^2.0.1",
+        "mongodb-client-encryption": ">=6.0.0 <7",
+        "snappy": "^7.2.2",
+        "socks": "^2.7.1"
       },
-      "engines": {
-        "node": ">=16 || 14 >=14.17"
+      "peerDependenciesMeta": {
+        "@aws-sdk/credential-providers": {
+          "optional": true
+        },
+        "@mongodb-js/zstd": {
+          "optional": true
+        },
+        "gcp-metadata": {
+          "optional": true
+        },
+        "kerberos": {
+          "optional": true
+        },
+        "mongodb-client-encryption": {
+          "optional": true
+        },
+        "snappy": {
+          "optional": true
+        },
+        "socks": {
+          "optional": true
+        }
       }
     },
-    "node_modules/npm/node_modules/minipass-fetch": {
-      "version": "5.0.0",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/mongodb-connection-string-url": {
+      "version": "3.0.2",
+      "resolved": "https://registry.npmjs.org/mongodb-connection-string-url/-/mongodb-connection-string-url-3.0.2.tgz",
+      "integrity": "sha512-rMO7CGo/9BFwyZABcKAWL8UJwH/Kc2x0g72uhDWzG48URRax5TCIcJ7Rc3RZqffZzO/Gwff/jyKwCU9TN8gehA==",
       "dependencies": {
-        "minipass": "^7.0.3",
-        "minipass-sized": "^1.0.3",
-        "minizlib": "^3.0.1"
-      },
-      "engines": {
-        "node": "^20.17.0 || >=22.9.0"
-      },
-      "optionalDependencies": {
-        "encoding": "^0.1.13"
+        "@types/whatwg-url": "^11.0.2",
+        "whatwg-url": "^14.1.0 || ^13.0.0"
       }
     },
-    "node_modules/npm/node_modules/minipass-flush": {
-      "version": "1.0.5",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/mongoose": {
+      "version": "8.13.0",
+      "resolved": "https://registry.npmjs.org/mongoose/-/mongoose-8.13.0.tgz",
+      "integrity": "sha512-e/iYV1mPeOkg+SWAMHzt3t42/EZyER3OB1H2pjP9C3vQ+Qb5DMeV9Kb+YCUycKgScA3fbwL7dKG4EpinGlg21g==",
       "dependencies": {
-        "minipass": "^3.0.0"
+        "bson": "^6.10.3",
+        "kareem": "2.6.3",
+        "mongodb": "~6.15.0",
+        "mpath": "0.9.0",
+        "mquery": "5.0.0",
+        "ms": "2.1.3",
+        "sift": "17.1.3"
       },
       "engines": {
-        "node": ">= 8"
-      }
-    },
-    "node_modules/npm/node_modules/minipass-flush/node_modules/minipass": {
-      "version": "3.3.6",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "yallist": "^4.0.0"
+        "node": ">=16.20.1"
       },
-      "engines": {
-        "node": ">=8"
+      "funding": {
+        "type": "opencollective",
+        "url": "https://opencollective.com/mongoose"
       }
     },
-    "node_modules/npm/node_modules/minipass-pipeline": {
-      "version": "1.2.4",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "minipass": "^3.0.0"
-      },
-      "engines": {
-        "node": ">=8"
-      }
+    "node_modules/mongoose/node_modules/ms": {
+      "version": "2.1.3",
+      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
+      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
     },
-    "node_modules/npm/node_modules/minipass-pipeline/node_modules/minipass": {
-      "version": "3.3.6",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "yallist": "^4.0.0"
-      },
+    "node_modules/mpath": {
+      "version": "0.9.0",
+      "resolved": "https://registry.npmjs.org/mpath/-/mpath-0.9.0.tgz",
+      "integrity": "sha512-ikJRQTk8hw5DEoFVxHG1Gn9T/xcjtdnOKIU1JTmGjZZlg9LST2mBLmcX3/ICIbgJydT2GOc15RnNy5mHmzfSew==",
       "engines": {
-        "node": ">=8"
+        "node": ">=4.0.0"
       }
     },
-    "node_modules/npm/node_modules/minipass-sized": {
-      "version": "1.0.3",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/mquery": {
+      "version": "5.0.0",
+      "resolved": "https://registry.npmjs.org/mquery/-/mquery-5.0.0.tgz",
+      "integrity": "sha512-iQMncpmEK8R8ncT8HJGsGc9Dsp8xcgYMVSbs5jgnm1lFHTZqMJTUWTDx1LBO8+mK3tPNZWFLBghQEIOULSTHZg==",
       "dependencies": {
-        "minipass": "^3.0.0"
+        "debug": "4.x"
       },
       "engines": {
-        "node": ">=8"
+        "node": ">=14.0.0"
       }
     },
-    "node_modules/npm/node_modules/minipass-sized/node_modules/minipass": {
-      "version": "3.3.6",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/mquery/node_modules/debug": {
+      "version": "4.4.0",
+      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.0.tgz",
+      "integrity": "sha512-6WTZ/IxCY/T6BALoZHaE4ctp9xm+Z5kY/pzYaCHRFeyVhojxlrm+46y68HA6hr0TcwEssoxNiDEUJQjfPZ/RYA==",
       "dependencies": {
-        "yallist": "^4.0.0"
+        "ms": "^2.1.3"
       },
       "engines": {
-        "node": ">=8"
-      }
-    },
-    "node_modules/npm/node_modules/minizlib": {
-      "version": "3.1.0",
-      "inBundle": true,
-      "license": "MIT",
-      "dependencies": {
-        "minipass": "^7.1.2"
+        "node": ">=6.0"
       },
-      "engines": {
-        "node": ">= 18"
+      "peerDependenciesMeta": {
+        "supports-color": {
+          "optional": true
+        }
       }
     },
-    "node_modules/npm/node_modules/ms": {
+    "node_modules/mquery/node_modules/ms": {
       "version": "2.1.3",
-      "inBundle": true,
-      "license": "MIT"
+      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
+      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
     },
-    "node_modules/npm/node_modules/mute-stream": {
-      "version": "3.0.0",
-      "inBundle": true,
-      "license": "ISC",
-      "engines": {
-        "node": "^20.17.0 || >=22.9.0"
-      }
+    "node_modules/ms": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
+      "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A=="
     },
-    "node_modules/npm/node_modules/negotiator": {
-      "version": "1.0.0",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/negotiator": {
+      "version": "0.6.3",
+      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
+      "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==",
       "engines": {
         "node": ">= 0.6"
       }
     },
-    "node_modules/npm/node_modules/node-gyp": {
-      "version": "12.1.0",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/node-fetch": {
+      "version": "2.7.0",
+      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.7.0.tgz",
+      "integrity": "sha512-c4FRfUm/dbcWZ7U+1Wq0AwCyFL+3nt2bEw05wfxSz+DWpWsitgmSgYmy2dQdWyKC1694ELPqMs/YzUSNozLt8A==",
       "dependencies": {
-        "env-paths": "^2.2.0",
-        "exponential-backoff": "^3.1.1",
-        "graceful-fs": "^4.2.6",
-        "make-fetch-happen": "^15.0.0",
-        "nopt": "^9.0.0",
-        "proc-log": "^6.0.0",
-        "semver": "^7.3.5",
-        "tar": "^7.5.2",
-        "tinyglobby": "^0.2.12",
-        "which": "^6.0.0"
-      },
-      "bin": {
-        "node-gyp": "bin/node-gyp.js"
+        "whatwg-url": "^5.0.0"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
-      }
-    },
-    "node_modules/npm/node_modules/nopt": {
-      "version": "9.0.0",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "abbrev": "^4.0.0"
+        "node": "4.x || >=6.0.0"
       },
-      "bin": {
-        "nopt": "bin/nopt.js"
+      "peerDependencies": {
+        "encoding": "^0.1.0"
       },
-      "engines": {
-        "node": "^20.17.0 || >=22.9.0"
-      }
-    },
-    "node_modules/npm/node_modules/npm-audit-report": {
-      "version": "7.0.0",
-      "inBundle": true,
-      "license": "ISC",
-      "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+      "peerDependenciesMeta": {
+        "encoding": {
+          "optional": true
+        }
       }
     },
-    "node_modules/npm/node_modules/npm-bundled": {
-      "version": "5.0.0",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "npm-normalize-package-bin": "^5.0.0"
-      },
-      "engines": {
-        "node": "^20.17.0 || >=22.9.0"
-      }
+    "node_modules/node-fetch/node_modules/tr46": {
+      "version": "0.0.3",
+      "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
+      "integrity": "sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw=="
     },
-    "node_modules/npm/node_modules/npm-install-checks": {
-      "version": "8.0.0",
-      "inBundle": true,
-      "license": "BSD-2-Clause",
-      "dependencies": {
-        "semver": "^7.1.1"
-      },
-      "engines": {
-        "node": "^20.17.0 || >=22.9.0"
-      }
+    "node_modules/node-fetch/node_modules/webidl-conversions": {
+      "version": "3.0.1",
+      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
+      "integrity": "sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ=="
     },
-    "node_modules/npm/node_modules/npm-normalize-package-bin": {
+    "node_modules/node-fetch/node_modules/whatwg-url": {
       "version": "5.0.0",
-      "inBundle": true,
-      "license": "ISC",
-      "engines": {
-        "node": "^20.17.0 || >=22.9.0"
-      }
-    },
-    "node_modules/npm/node_modules/npm-package-arg": {
-      "version": "13.0.2",
-      "inBundle": true,
-      "license": "ISC",
+      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",
+      "integrity": "sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==",
       "dependencies": {
-        "hosted-git-info": "^9.0.0",
-        "proc-log": "^6.0.0",
-        "semver": "^7.3.5",
-        "validate-npm-package-name": "^7.0.0"
-      },
-      "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "tr46": "~0.0.3",
+        "webidl-conversions": "^3.0.0"
       }
     },
-    "node_modules/npm/node_modules/npm-packlist": {
-      "version": "10.0.3",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "ignore-walk": "^8.0.0",
-        "proc-log": "^6.0.0"
-      },
+    "node_modules/object-assign": {
+      "version": "4.1.1",
+      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
+      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">=0.10.0"
       }
     },
-    "node_modules/npm/node_modules/npm-pick-manifest": {
-      "version": "11.0.3",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "npm-install-checks": "^8.0.0",
-        "npm-normalize-package-bin": "^5.0.0",
-        "npm-package-arg": "^13.0.0",
-        "semver": "^7.3.5"
-      },
+    "node_modules/object-inspect": {
+      "version": "1.13.4",
+      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
+      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
-      }
-    },
-    "node_modules/npm/node_modules/npm-profile": {
-      "version": "12.0.1",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "npm-registry-fetch": "^19.0.0",
-        "proc-log": "^6.0.0"
+        "node": ">= 0.4"
       },
-      "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
       }
     },
-    "node_modules/npm/node_modules/npm-registry-fetch": {
-      "version": "19.1.1",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/on-finished": {
+      "version": "2.4.1",
+      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
+      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
       "dependencies": {
-        "@npmcli/redact": "^4.0.0",
-        "jsonparse": "^1.3.1",
-        "make-fetch-happen": "^15.0.0",
-        "minipass": "^7.0.2",
-        "minipass-fetch": "^5.0.0",
-        "minizlib": "^3.0.1",
-        "npm-package-arg": "^13.0.0",
-        "proc-log": "^6.0.0"
+        "ee-first": "1.1.1"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.8"
       }
     },
-    "node_modules/npm/node_modules/npm-user-validate": {
-      "version": "4.0.0",
-      "inBundle": true,
-      "license": "BSD-2-Clause",
+    "node_modules/parseurl": {
+      "version": "1.3.3",
+      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
+      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.8"
       }
     },
-    "node_modules/npm/node_modules/p-map": {
-      "version": "7.0.4",
-      "inBundle": true,
-      "license": "MIT",
-      "engines": {
-        "node": ">=18"
-      },
-      "funding": {
-        "url": "https://github.com/sponsors/sindresorhus"
-      }
+    "node_modules/path-to-regexp": {
+      "version": "0.1.12",
+      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.12.tgz",
+      "integrity": "sha512-RA1GjUVMnvYFxuqovrEqZoxxW5NUZqbwKtYz/Tt7nXerk0LbLblQmrsgdeOxV5SFHf0UDggjS/bSeOZwt1pmEQ=="
     },
-    "node_modules/npm/node_modules/pacote": {
-      "version": "21.0.4",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/proxy-addr": {
+      "version": "2.0.7",
+      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
+      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
       "dependencies": {
-        "@npmcli/git": "^7.0.0",
-        "@npmcli/installed-package-contents": "^4.0.0",
-        "@npmcli/package-json": "^7.0.0",
-        "@npmcli/promise-spawn": "^9.0.0",
-        "@npmcli/run-script": "^10.0.0",
-        "cacache": "^20.0.0",
-        "fs-minipass": "^3.0.0",
-        "minipass": "^7.0.2",
-        "npm-package-arg": "^13.0.0",
-        "npm-packlist": "^10.0.1",
-        "npm-pick-manifest": "^11.0.1",
-        "npm-registry-fetch": "^19.0.0",
-        "proc-log": "^6.0.0",
-        "promise-retry": "^2.0.1",
-        "sigstore": "^4.0.0",
-        "ssri": "^13.0.0",
-        "tar": "^7.4.3"
-      },
-      "bin": {
-        "pacote": "bin/index.js"
+        "forwarded": "0.2.0",
+        "ipaddr.js": "1.9.1"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.10"
       }
     },
-    "node_modules/npm/node_modules/parse-conflict-json": {
-      "version": "5.0.1",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "json-parse-even-better-errors": "^5.0.0",
-        "just-diff": "^6.0.0",
-        "just-diff-apply": "^5.2.0"
-      },
+    "node_modules/punycode": {
+      "version": "2.3.1",
+      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
+      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">=6"
       }
     },
-    "node_modules/npm/node_modules/path-scurry": {
-      "version": "2.0.1",
-      "inBundle": true,
-      "license": "BlueOak-1.0.0",
+    "node_modules/qs": {
+      "version": "6.13.0",
+      "resolved": "https://registry.npmjs.org/qs/-/qs-6.13.0.tgz",
+      "integrity": "sha512-+38qI9SOr8tfZ4QmJNplMUxqjbe7LKvvZgWdExBOmd+egZTtjLB67Gu0HRX3u/XOq7UU2Nx6nsjvS16Z9uwfpg==",
       "dependencies": {
-        "lru-cache": "^11.0.0",
-        "minipass": "^7.1.2"
+        "side-channel": "^1.0.6"
       },
       "engines": {
-        "node": "20 || >=22"
+        "node": ">=0.6"
       },
       "funding": {
-        "url": "https://github.com/sponsors/isaacs"
-      }
-    },
-    "node_modules/npm/node_modules/postcss-selector-parser": {
-      "version": "7.1.1",
-      "inBundle": true,
-      "license": "MIT",
-      "dependencies": {
-        "cssesc": "^3.0.0",
-        "util-deprecate": "^1.0.2"
-      },
-      "engines": {
-        "node": ">=4"
+        "url": "https://github.com/sponsors/ljharb"
       }
     },
-    "node_modules/npm/node_modules/proc-log": {
-      "version": "6.1.0",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/range-parser": {
+      "version": "1.2.1",
+      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
+      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.6"
       }
     },
-    "node_modules/npm/node_modules/proggy": {
-      "version": "4.0.0",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/raw-body": {
+      "version": "2.5.2",
+      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.2.tgz",
+      "integrity": "sha512-8zGqypfENjCIqGhgXToC8aB2r7YrBX+AQAfIPs/Mlk+BtPTztOvTS01NRW/3Eh60J+a48lt8qsCzirQ6loCVfA==",
+      "dependencies": {
+        "bytes": "3.1.2",
+        "http-errors": "2.0.0",
+        "iconv-lite": "0.4.24",
+        "unpipe": "1.0.0"
+      },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.8"
       }
     },
-    "node_modules/npm/node_modules/promise-all-reject-late": {
-      "version": "1.0.1",
-      "inBundle": true,
-      "license": "ISC",
-      "funding": {
-        "url": "https://github.com/sponsors/isaacs"
-      }
+    "node_modules/safe-buffer": {
+      "version": "5.2.1",
+      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
+      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
+      "funding": [
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/feross"
+        },
+        {
+          "type": "patreon",
+          "url": "https://www.patreon.com/feross"
+        },
+        {
+          "type": "consulting",
+          "url": "https://feross.org/support"
+        }
+      ]
     },
-    "node_modules/npm/node_modules/promise-call-limit": {
-      "version": "3.0.2",
-      "inBundle": true,
-      "license": "ISC",
-      "funding": {
-        "url": "https://github.com/sponsors/isaacs"
-      }
+    "node_modules/safer-buffer": {
+      "version": "2.1.2",
+      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
+      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
     },
-    "node_modules/npm/node_modules/promise-retry": {
-      "version": "2.0.1",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/send": {
+      "version": "0.19.0",
+      "resolved": "https://registry.npmjs.org/send/-/send-0.19.0.tgz",
+      "integrity": "sha512-dW41u5VfLXu8SJh5bwRmyYUbAoSB3c9uQh6L8h/KtsFREPWpbX1lrljJo186Jc4nmci/sGUZ9a0a0J2zgfq2hw==",
       "dependencies": {
-        "err-code": "^2.0.2",
-        "retry": "^0.12.0"
+        "debug": "2.6.9",
+        "depd": "2.0.0",
+        "destroy": "1.2.0",
+        "encodeurl": "~1.0.2",
+        "escape-html": "~1.0.3",
+        "etag": "~1.8.1",
+        "fresh": "0.5.2",
+        "http-errors": "2.0.0",
+        "mime": "1.6.0",
+        "ms": "2.1.3",
+        "on-finished": "2.4.1",
+        "range-parser": "~1.2.1",
+        "statuses": "2.0.1"
       },
       "engines": {
-        "node": ">=10"
+        "node": ">= 0.8.0"
       }
     },
-    "node_modules/npm/node_modules/promzard": {
-      "version": "3.0.1",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "read": "^5.0.0"
-      },
+    "node_modules/send/node_modules/encodeurl": {
+      "version": "1.0.2",
+      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
+      "integrity": "sha512-TPJXq8JqFaVYm2CWmPvnP2Iyo4ZSM7/QKcSmuMLDObfpH5fi7RUGmd/rTDf+rut/saiDiQEeVTNgAmJEdAOx0w==",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.8"
       }
     },
-    "node_modules/npm/node_modules/qrcode-terminal": {
-      "version": "0.12.0",
-      "inBundle": true,
-      "bin": {
-        "qrcode-terminal": "bin/qrcode-terminal.js"
-      }
+    "node_modules/send/node_modules/ms": {
+      "version": "2.1.3",
+      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
+      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
     },
-    "node_modules/npm/node_modules/read": {
-      "version": "5.0.1",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/serve-static": {
+      "version": "1.16.2",
+      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.16.2.tgz",
+      "integrity": "sha512-VqpjJZKadQB/PEbEwvFdO43Ax5dFBZ2UECszz8bQ7pi7wt//PWe1P6MN7eCnjsatYtBT6EuiClbjSWP2WrIoTw==",
       "dependencies": {
-        "mute-stream": "^3.0.0"
+        "encodeurl": "~2.0.0",
+        "escape-html": "~1.0.3",
+        "parseurl": "~1.3.3",
+        "send": "0.19.0"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
-      }
-    },
-    "node_modules/npm/node_modules/read-cmd-shim": {
-      "version": "6.0.0",
-      "inBundle": true,
-      "license": "ISC",
-      "engines": {
-        "node": "^20.17.0 || >=22.9.0"
-      }
-    },
-    "node_modules/npm/node_modules/retry": {
-      "version": "0.12.0",
-      "inBundle": true,
-      "license": "MIT",
-      "engines": {
-        "node": ">= 4"
+        "node": ">= 0.8.0"
       }
     },
-    "node_modules/npm/node_modules/safer-buffer": {
-      "version": "2.1.2",
-      "inBundle": true,
-      "license": "MIT",
-      "optional": true
+    "node_modules/setprototypeof": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
+      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw=="
     },
-    "node_modules/npm/node_modules/semver": {
-      "version": "7.7.3",
-      "inBundle": true,
-      "license": "ISC",
-      "bin": {
-        "semver": "bin/semver.js"
+    "node_modules/side-channel": {
+      "version": "1.1.0",
+      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
+      "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
+      "dependencies": {
+        "es-errors": "^1.3.0",
+        "object-inspect": "^1.13.3",
+        "side-channel-list": "^1.0.0",
+        "side-channel-map": "^1.0.1",
+        "side-channel-weakmap": "^1.0.2"
       },
       "engines": {
-        "node": ">=10"
-      }
-    },
-    "node_modules/npm/node_modules/signal-exit": {
-      "version": "4.1.0",
-      "inBundle": true,
-      "license": "ISC",
-      "engines": {
-        "node": ">=14"
+        "node": ">= 0.4"
       },
       "funding": {
-        "url": "https://github.com/sponsors/isaacs"
+        "url": "https://github.com/sponsors/ljharb"
       }
     },
-    "node_modules/npm/node_modules/sigstore": {
-      "version": "4.1.0",
-      "inBundle": true,
-      "license": "Apache-2.0",
+    "node_modules/side-channel-list": {
+      "version": "1.0.0",
+      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.0.tgz",
+      "integrity": "sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==",
       "dependencies": {
-        "@sigstore/bundle": "^4.0.0",
-        "@sigstore/core": "^3.1.0",
-        "@sigstore/protobuf-specs": "^0.5.0",
-        "@sigstore/sign": "^4.1.0",
-        "@sigstore/tuf": "^4.0.1",
-        "@sigstore/verify": "^3.1.0"
+        "es-errors": "^1.3.0",
+        "object-inspect": "^1.13.3"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
-      }
-    },
-    "node_modules/npm/node_modules/smart-buffer": {
-      "version": "4.2.0",
-      "inBundle": true,
-      "license": "MIT",
-      "engines": {
-        "node": ">= 6.0.0",
-        "npm": ">= 3.0.0"
+        "node": ">= 0.4"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
       }
     },
-    "node_modules/npm/node_modules/socks": {
-      "version": "2.8.7",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/side-channel-map": {
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
+      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
       "dependencies": {
-        "ip-address": "^10.0.1",
-        "smart-buffer": "^4.2.0"
+        "call-bound": "^1.0.2",
+        "es-errors": "^1.3.0",
+        "get-intrinsic": "^1.2.5",
+        "object-inspect": "^1.13.3"
       },
       "engines": {
-        "node": ">= 10.0.0",
-        "npm": ">= 3.0.0"
+        "node": ">= 0.4"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
       }
     },
-    "node_modules/npm/node_modules/socks-proxy-agent": {
-      "version": "8.0.5",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/side-channel-weakmap": {
+      "version": "1.0.2",
+      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
+      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
       "dependencies": {
-        "agent-base": "^7.1.2",
-        "debug": "^4.3.4",
-        "socks": "^2.8.3"
+        "call-bound": "^1.0.2",
+        "es-errors": "^1.3.0",
+        "get-intrinsic": "^1.2.5",
+        "object-inspect": "^1.13.3",
+        "side-channel-map": "^1.0.1"
       },
       "engines": {
-        "node": ">= 14"
+        "node": ">= 0.4"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
       }
     },
-    "node_modules/npm/node_modules/spdx-correct": {
-      "version": "3.2.0",
-      "inBundle": true,
-      "license": "Apache-2.0",
-      "dependencies": {
-        "spdx-expression-parse": "^3.0.0",
-        "spdx-license-ids": "^3.0.0"
-      }
+    "node_modules/sift": {
+      "version": "17.1.3",
+      "resolved": "https://registry.npmjs.org/sift/-/sift-17.1.3.tgz",
+      "integrity": "sha512-Rtlj66/b0ICeFzYTuNvX/EF1igRbbnGSvEyT79McoZa/DeGhMyC5pWKOEsZKnpkqtSeovd5FL/bjHWC3CIIvCQ=="
     },
-    "node_modules/npm/node_modules/spdx-correct/node_modules/spdx-expression-parse": {
-      "version": "3.0.1",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/socket.io": {
+      "version": "4.8.1",
+      "resolved": "https://registry.npmjs.org/socket.io/-/socket.io-4.8.1.tgz",
+      "integrity": "sha512-oZ7iUCxph8WYRHHcjBEc9unw3adt5CmSNlppj/5Q4k2RIrhl8Z5yY2Xr4j9zj0+wzVZ0bxmYoGSzKJnRl6A4yg==",
       "dependencies": {
-        "spdx-exceptions": "^2.1.0",
-        "spdx-license-ids": "^3.0.0"
+        "accepts": "~1.3.4",
+        "base64id": "~2.0.0",
+        "cors": "~2.8.5",
+        "debug": "~4.3.2",
+        "engine.io": "~6.6.0",
+        "socket.io-adapter": "~2.5.2",
+        "socket.io-parser": "~4.2.4"
+      },
+      "engines": {
+        "node": ">=10.2.0"
       }
     },
-    "node_modules/npm/node_modules/spdx-exceptions": {
-      "version": "2.5.0",
-      "inBundle": true,
-      "license": "CC-BY-3.0"
-    },
-    "node_modules/npm/node_modules/spdx-expression-parse": {
-      "version": "4.0.0",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/socket.io-adapter": {
+      "version": "2.5.5",
+      "resolved": "https://registry.npmjs.org/socket.io-adapter/-/socket.io-adapter-2.5.5.tgz",
+      "integrity": "sha512-eLDQas5dzPgOWCk9GuuJC2lBqItuhKI4uxGgo9aIV7MYbk2h9Q6uULEh8WBzThoI7l+qU9Ast9fVUmkqPP9wYg==",
       "dependencies": {
-        "spdx-exceptions": "^2.1.0",
-        "spdx-license-ids": "^3.0.0"
+        "debug": "~4.3.4",
+        "ws": "~8.17.1"
       }
     },
-    "node_modules/npm/node_modules/spdx-license-ids": {
-      "version": "3.0.22",
-      "inBundle": true,
-      "license": "CC0-1.0"
-    },
-    "node_modules/npm/node_modules/ssri": {
-      "version": "13.0.0",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/socket.io-adapter/node_modules/debug": {
+      "version": "4.3.7",
+      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.7.tgz",
+      "integrity": "sha512-Er2nc/H7RrMXZBFCEim6TCmMk02Z8vLC2Rbi1KEBggpo0fS6l0S1nnapwmIi3yW/+GOJap1Krg4w0Hg80oCqgQ==",
       "dependencies": {
-        "minipass": "^7.0.3"
+        "ms": "^2.1.3"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">=6.0"
+      },
+      "peerDependenciesMeta": {
+        "supports-color": {
+          "optional": true
+        }
       }
     },
-    "node_modules/npm/node_modules/string-width": {
-      "version": "4.2.3",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/socket.io-adapter/node_modules/ms": {
+      "version": "2.1.3",
+      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
+      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
+    },
+    "node_modules/socket.io-client": {
+      "version": "4.8.1",
+      "resolved": "https://registry.npmjs.org/socket.io-client/-/socket.io-client-4.8.1.tgz",
+      "integrity": "sha512-hJVXfu3E28NmzGk8o1sHhN3om52tRvwYeidbj7xKy2eIIse5IoKX3USlS6Tqt3BHAtflLIkCQBkzVrEEfWUyYQ==",
       "dependencies": {
-        "emoji-regex": "^8.0.0",
-        "is-fullwidth-code-point": "^3.0.0",
-        "strip-ansi": "^6.0.1"
+        "@socket.io/component-emitter": "~3.1.0",
+        "debug": "~4.3.2",
+        "engine.io-client": "~6.6.1",
+        "socket.io-parser": "~4.2.4"
       },
       "engines": {
-        "node": ">=8"
+        "node": ">=10.0.0"
       }
     },
-    "node_modules/npm/node_modules/strip-ansi": {
-      "version": "6.0.1",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/socket.io-client/node_modules/debug": {
+      "version": "4.3.7",
+      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.7.tgz",
+      "integrity": "sha512-Er2nc/H7RrMXZBFCEim6TCmMk02Z8vLC2Rbi1KEBggpo0fS6l0S1nnapwmIi3yW/+GOJap1Krg4w0Hg80oCqgQ==",
       "dependencies": {
-        "ansi-regex": "^5.0.1"
+        "ms": "^2.1.3"
       },
       "engines": {
-        "node": ">=8"
-      }
-    },
-    "node_modules/npm/node_modules/supports-color": {
-      "version": "10.2.2",
-      "inBundle": true,
-      "license": "MIT",
-      "engines": {
-        "node": ">=18"
+        "node": ">=6.0"
       },
-      "funding": {
-        "url": "https://github.com/chalk/supports-color?sponsor=1"
+      "peerDependenciesMeta": {
+        "supports-color": {
+          "optional": true
+        }
       }
     },
-    "node_modules/npm/node_modules/tar": {
-      "version": "7.5.4",
-      "inBundle": true,
-      "license": "BlueOak-1.0.0",
+    "node_modules/socket.io-client/node_modules/ms": {
+      "version": "2.1.3",
+      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
+      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
+    },
+    "node_modules/socket.io-parser": {
+      "version": "4.2.4",
+      "resolved": "https://registry.npmjs.org/socket.io-parser/-/socket.io-parser-4.2.4.tgz",
+      "integrity": "sha512-/GbIKmo8ioc+NIWIhwdecY0ge+qVBSMdgxGygevmdHj24bsfgtCmcUUcQ5ZzcylGFHsN3k4HB4Cgkl96KVnuew==",
       "dependencies": {
-        "@isaacs/fs-minipass": "^4.0.0",
-        "chownr": "^3.0.0",
-        "minipass": "^7.1.2",
-        "minizlib": "^3.1.0",
-        "yallist": "^5.0.0"
+        "@socket.io/component-emitter": "~3.1.0",
+        "debug": "~4.3.1"
       },
       "engines": {
-        "node": ">=18"
-      }
-    },
-    "node_modules/npm/node_modules/tar/node_modules/yallist": {
-      "version": "5.0.0",
-      "inBundle": true,
-      "license": "BlueOak-1.0.0",
-      "engines": {
-        "node": ">=18"
+        "node": ">=10.0.0"
       }
     },
-    "node_modules/npm/node_modules/text-table": {
-      "version": "0.2.0",
-      "inBundle": true,
-      "license": "MIT"
-    },
-    "node_modules/npm/node_modules/tiny-relative-date": {
-      "version": "2.0.2",
-      "inBundle": true,
-      "license": "MIT"
-    },
-    "node_modules/npm/node_modules/tinyglobby": {
-      "version": "0.2.15",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/socket.io-parser/node_modules/debug": {
+      "version": "4.3.7",
+      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.7.tgz",
+      "integrity": "sha512-Er2nc/H7RrMXZBFCEim6TCmMk02Z8vLC2Rbi1KEBggpo0fS6l0S1nnapwmIi3yW/+GOJap1Krg4w0Hg80oCqgQ==",
       "dependencies": {
-        "fdir": "^6.5.0",
-        "picomatch": "^4.0.3"
+        "ms": "^2.1.3"
       },
       "engines": {
-        "node": ">=12.0.0"
+        "node": ">=6.0"
       },
-      "funding": {
-        "url": "https://github.com/sponsors/SuperchupuDev"
+      "peerDependenciesMeta": {
+        "supports-color": {
+          "optional": true
+        }
       }
     },
-    "node_modules/npm/node_modules/tinyglobby/node_modules/fdir": {
-      "version": "6.5.0",
-      "inBundle": true,
-      "license": "MIT",
-      "engines": {
-        "node": ">=12.0.0"
+    "node_modules/socket.io-parser/node_modules/ms": {
+      "version": "2.1.3",
+      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
+      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
+    },
+    "node_modules/socket.io/node_modules/debug": {
+      "version": "4.3.7",
+      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.7.tgz",
+      "integrity": "sha512-Er2nc/H7RrMXZBFCEim6TCmMk02Z8vLC2Rbi1KEBggpo0fS6l0S1nnapwmIi3yW/+GOJap1Krg4w0Hg80oCqgQ==",
+      "dependencies": {
+        "ms": "^2.1.3"
       },
-      "peerDependencies": {
-        "picomatch": "^3 || ^4"
+      "engines": {
+        "node": ">=6.0"
       },
       "peerDependenciesMeta": {
-        "picomatch": {
+        "supports-color": {
           "optional": true
         }
       }
     },
-    "node_modules/npm/node_modules/tinyglobby/node_modules/picomatch": {
-      "version": "4.0.3",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/socket.io/node_modules/ms": {
+      "version": "2.1.3",
+      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
+      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
+    },
+    "node_modules/sparse-bitfield": {
+      "version": "3.0.3",
+      "resolved": "https://registry.npmjs.org/sparse-bitfield/-/sparse-bitfield-3.0.3.tgz",
+      "integrity": "sha512-kvzhi7vqKTfkh0PZU+2D2PIllw2ymqJKujUcyPMd9Y75Nv4nPbGJZXNhxsgdQab2BmlDct1YnfQCguEvHr7VsQ==",
+      "dependencies": {
+        "memory-pager": "^1.0.2"
+      }
+    },
+    "node_modules/statuses": {
+      "version": "2.0.1",
+      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",
+      "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==",
       "engines": {
-        "node": ">=12"
-      },
-      "funding": {
-        "url": "https://github.com/sponsors/jonschlinkert"
+        "node": ">= 0.8"
       }
     },
-    "node_modules/npm/node_modules/treeverse": {
-      "version": "3.0.0",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/toidentifier": {
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
+      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
       "engines": {
-        "node": "^14.17.0 || ^16.13.0 || >=18.0.0"
+        "node": ">=0.6"
       }
     },
-    "node_modules/npm/node_modules/tuf-js": {
-      "version": "4.1.0",
-      "inBundle": true,
-      "license": "MIT",
+    "node_modules/tr46": {
+      "version": "5.1.0",
+      "resolved": "https://registry.npmjs.org/tr46/-/tr46-5.1.0.tgz",
+      "integrity": "sha512-IUWnUK7ADYR5Sl1fZlO1INDUhVhatWl7BtJWsIhwJ0UAK7ilzzIa8uIqOO/aYVWHZPJkKbEL+362wrzoeRF7bw==",
       "dependencies": {
-        "@tufjs/models": "4.1.0",
-        "debug": "^4.4.3",
-        "make-fetch-happen": "^15.0.1"
+        "punycode": "^2.3.1"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">=18"
       }
     },
-    "node_modules/npm/node_modules/unique-filename": {
-      "version": "5.0.0",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/type-is": {
+      "version": "1.6.18",
+      "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
+      "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
       "dependencies": {
-        "unique-slug": "^6.0.0"
+        "media-typer": "0.3.0",
+        "mime-types": "~2.1.24"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.6"
       }
     },
-    "node_modules/npm/node_modules/unique-slug": {
-      "version": "6.0.0",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "imurmurhash": "^0.1.4"
-      },
+    "node_modules/undici-types": {
+      "version": "6.20.0",
+      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.20.0.tgz",
+      "integrity": "sha512-Ny6QZ2Nju20vw1SRHe3d9jVu6gJ+4e3+MMpqu7pqE5HT6WsTSlce++GQmK5UXS8mzV8DSYHrQH+Xrf2jVcuKNg=="
+    },
+    "node_modules/unpipe": {
+      "version": "1.0.0",
+      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
+      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.8"
       }
     },
-    "node_modules/npm/node_modules/util-deprecate": {
-      "version": "1.0.2",
-      "inBundle": true,
-      "license": "MIT"
+    "node_modules/url-template": {
+      "version": "2.0.8",
+      "resolved": "https://registry.npmjs.org/url-template/-/url-template-2.0.8.tgz",
+      "integrity": "sha512-XdVKMF4SJ0nP/O7XIPB0JwAEuT9lDIYnNsK8yGVe43y0AWoKeJNdv3ZNWh7ksJ6KqQFjOO6ox/VEitLnaVNufw=="
     },
-    "node_modules/npm/node_modules/validate-npm-package-license": {
-      "version": "3.0.4",
-      "inBundle": true,
-      "license": "Apache-2.0",
-      "dependencies": {
-        "spdx-correct": "^3.0.0",
-        "spdx-expression-parse": "^3.0.0"
+    "node_modules/utils-merge": {
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
+      "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==",
+      "engines": {
+        "node": ">= 0.4.0"
       }
     },
-    "node_modules/npm/node_modules/validate-npm-package-license/node_modules/spdx-expression-parse": {
-      "version": "3.0.1",
-      "inBundle": true,
-      "license": "MIT",
-      "dependencies": {
-        "spdx-exceptions": "^2.1.0",
-        "spdx-license-ids": "^3.0.0"
+    "node_modules/uuid": {
+      "version": "9.0.1",
+      "resolved": "https://registry.npmjs.org/uuid/-/uuid-9.0.1.tgz",
+      "integrity": "sha512-b+1eJOlsR9K8HJpow9Ok3fiWOWSIcIzXodvv0rQjVoOVNpWMpxf1wZNpt4y9h10odCNrqnYp1OBzRktckBe3sA==",
+      "funding": [
+        "https://github.com/sponsors/broofa",
+        "https://github.com/sponsors/ctavan"
+      ],
+      "bin": {
+        "uuid": "dist/bin/uuid"
       }
     },
-    "node_modules/npm/node_modules/validate-npm-package-name": {
-      "version": "7.0.2",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/vary": {
+      "version": "1.1.2",
+      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
+      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">= 0.8"
       }
     },
-    "node_modules/npm/node_modules/walk-up-path": {
-      "version": "4.0.0",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/webidl-conversions": {
+      "version": "7.0.0",
+      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-7.0.0.tgz",
+      "integrity": "sha512-VwddBukDzu71offAQR975unBIGqfKZpM+8ZX6ySk8nYhVoo5CYaZyzt3YBvYtRtO+aoGlqxPg/B87NGVZ/fu6g==",
       "engines": {
-        "node": "20 || >=22"
+        "node": ">=12"
       }
     },
-    "node_modules/npm/node_modules/which": {
-      "version": "6.0.0",
-      "inBundle": true,
-      "license": "ISC",
+    "node_modules/whatwg-url": {
+      "version": "14.2.0",
+      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-14.2.0.tgz",
+      "integrity": "sha512-De72GdQZzNTUBBChsXueQUnPKDkg/5A5zp7pFDuQAj5UFoENpiACU0wlCvzpAGnTkj++ihpKwKyYewn/XNUbKw==",
       "dependencies": {
-        "isexe": "^3.1.1"
-      },
-      "bin": {
-        "node-which": "bin/which.js"
+        "tr46": "^5.1.0",
+        "webidl-conversions": "^7.0.0"
       },
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">=18"
       }
     },
-    "node_modules/npm/node_modules/write-file-atomic": {
-      "version": "7.0.0",
-      "inBundle": true,
-      "license": "ISC",
-      "dependencies": {
-        "imurmurhash": "^0.1.4",
-        "signal-exit": "^4.0.1"
-      },
+    "node_modules/ws": {
+      "version": "8.17.1",
+      "resolved": "https://registry.npmjs.org/ws/-/ws-8.17.1.tgz",
+      "integrity": "sha512-6XQFvXTkbfUOZOKKILFG1PDK2NDQs4azKQl26T0YS5CxqWLgXajbPZ+h4gZekJyRqFU8pvnbAbbs/3TgRPy+GQ==",
       "engines": {
-        "node": "^20.17.0 || >=22.9.0"
+        "node": ">=10.0.0"
+      },
+      "peerDependencies": {
+        "bufferutil": "^4.0.1",
+        "utf-8-validate": ">=5.0.2"
+      },
+      "peerDependenciesMeta": {
+        "bufferutil": {
+          "optional": true
+        },
+        "utf-8-validate": {
+          "optional": true
+        }
       }
     },
-    "node_modules/npm/node_modules/yallist": {
-      "version": "4.0.0",
-      "inBundle": true,
-      "license": "ISC"
+    "node_modules/xmlhttprequest-ssl": {
+      "version": "2.1.2",
+      "resolved": "https://registry.npmjs.org/xmlhttprequest-ssl/-/xmlhttprequest-ssl-2.1.2.tgz",
+      "integrity": "sha512-TEU+nJVUUnA4CYJFLvK5X9AOeH4KvDvhIfm0vV1GaQRtchnG0hgK5p8hw/xjv8cunWYCsiPCSDzObPyhEwq3KQ==",
+      "engines": {
+        "node": ">=0.4.0"
+      }
     }
   }
 }
diff --git a/package.json b/package.json
deleted file mode 100644
index 5ba10c4..0000000
--- a/package.json
+++ /dev/null
@@ -1,5 +0,0 @@
-{
-  "dependencies": {
-    "npm": "^11.8.0"
-  }
-}
diff --git a/puzzles/index.html b/puzzles/index.html
index b04ea77..52b7183 100644
--- a/puzzles/index.html
+++ b/puzzles/index.html
@@ -1,466 +1,280 @@
-<!doctype html>
+<!DOCTYPE html>
 <html lang="en">
-  <head>
-    <meta charset="UTF-8" />
-    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
-    <title>Puzzles 2 Puzzle U</title>
-    <link
-      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
-      rel="stylesheet"
-    />
-    <script src="https://cdn.tailwindcss.com"></script>
-    <script>
-      tailwind.config = {
-        darkMode: 'class',
-        theme: {
-          extend: {
-            fontFamily: {
-              serif: ['Merriweather', 'serif'],
-              sans: ['Lato', 'sans-serif'],
-            },
-            colors: {
-              gray: {
-                850: '#1f2937',
-                950: '#030712',
-              },
-            },
+
+<head>
+  <meta charset="UTF-8" />
+  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
+  <title>Puzzles 2 Puzzle U</title>
+  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
+  <script src="https://cdn.tailwindcss.com"></script>
+  <script>
+    tailwind.config = {
+      darkMode: 'class',
+      theme: {
+        extend: {
+          fontFamily: {
+            serif: ['Merriweather', 'serif'],
+            sans: ['Lato', 'sans-serif'],
           },
+          colors: {
+            gray: {
+              850: '#1f2937',
+              950: '#030712',
+            }
+          }
         },
-      };
-    </script>
-    <script src="https://accounts.google.com/gsi/client" async defer></script>
-    <link rel="preconnect" href="https://fonts.googleapis.com" />
-    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
-    <link
-      href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap"
-      rel="stylesheet"
-    />
-    <link rel="stylesheet" href="/styles/styles.css" />
-    <link rel="stylesheet" href="/styles/fonts.css" />
-    <link
-      rel="icon"
-      type="image/png"
-      href="/favicon/favicon-2.ico"
-      sizes="96x96"
-    />
-    <link rel="icon" type="image/svg+xml" href="/favicon/favicon-2.ico" />
-    <link rel="shortcut icon" href="/favicon/favicon-2.ico" />
-    <link
-      rel="apple-touch-icon-2"
-      sizes="180x180"
-      href="/favicon/favicon-2.ico"
-    />
-    <link rel="manifest" href="/favicon/site.webmanifest" />
-  </head>
+      },
+    }
+  </script>
+  <script src="https://accounts.google.com/gsi/client" async defer></script>
+  <link rel="preconnect" href="https://fonts.googleapis.com" />
+  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
+  <link
+    href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap"
+    rel="stylesheet" />
+  <link rel="stylesheet" href="/styles/styles.css" />
+  <link rel="stylesheet" href="/styles/fonts.css" />
+  <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
+  <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
+  <link rel="shortcut icon" href="/favicon/favicon.ico" />
+  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
+  <link rel="manifest" href="/favicon/site.webmanifest" />
+</head>
 
-  <body
-    class="!bg-white dark:!bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300 font-serif antialiased selection:bg-gray-200 dark:selection:bg-gray-800"
-  >
-    <div
-      class="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800"
-    >
-      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
-        <div class="flex justify-between items-center h-20">
-          <!-- Logo / Brand -->
-          <div class="flex items-center gap-4">
-            <div class="border border-gray-900 dark:border-gray-100 p-1">
-              <img
-                src="/assets/massocicon.jpg"
-                alt="Logo"
-                class="h-8 w-8 dark:grayscale"
-              />
-            </div>
-            <div class="flex flex-col leading-none">
-              <a
-                href="/puzzles/index.html"
-                class="text-xl font-bold tracking-tight hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-sans uppercase"
-              >
-                Puzzles 2 Puzzle U
-              </a>
-              <span
-                class="text-xs text-gray-500 dark:text-gray-400 font-sans tracking-widest uppercase"
-                >Maths Assoc BITS Pilani</span
-              >
-            </div>
+<body class="!bg-white dark:!bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300 font-serif antialiased selection:bg-gray-200 dark:selection:bg-gray-800">
+  <div class="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
+    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
+      <div class="flex justify-between items-center h-20">
+        <!-- Logo / Brand -->
+        <div class="flex items-center gap-4">
+          <div class="border border-gray-900 dark:border-gray-100 p-1">
+            <img src="/assets/massocicon.jpg" alt="Logo" class="h-8 w-8 dark:grayscale" />
           </div>
-
-          <!-- Desktop Menu -->
-          <div
-            class="hidden md:flex items-center space-x-8 font-sans text-sm tracking-wide uppercase font-bold"
-          >
-            <a
-              href="/puzzles/leaderboard.html"
-              class="hover:text-gray-500 transition-colors"
-              >Leaderboard</a
-            >
-            <a href="/index.html" class="hover:text-gray-500 transition-colors"
-              >Home</a
-            >
-            <a
-              href="/contact.html"
-              class="hover:text-gray-500 transition-colors"
-              >Contact</a
-            >
-
-            <!-- Theme Toggle -->
-            <button
-              id="theme-toggle"
-              class="focus:outline-none hover:text-gray-500 transition-colors p-2 rounded-md"
-            >
-              <svg
-                id="theme-toggle-light-icon"
-                class="hidden w-5 h-5"
-                fill="currentColor"
-                viewBox="0 0 20 20"
-              >
-                <path
-                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
-                  fill-rule="evenodd"
-                  clip-rule="evenodd"
-                ></path>
-              </svg>
-              <svg
-                id="theme-toggle-dark-icon"
-                class="hidden w-5 h-5"
-                fill="currentColor"
-                viewBox="0 0 20 20"
-              >
-                <path
-                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
-                ></path>
-              </svg>
-            </button>
+          <div class="flex flex-col leading-none">
+            <a href="/puzzles/index.html" class="text-xl font-bold tracking-tight hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-sans uppercase">
+              Puzzles 2 Puzzle U
+            </a>
+            <span class="text-xs text-gray-500 dark:text-gray-400 font-sans tracking-widest uppercase">Maths Assoc BITS Pilani</span>
           </div>
+        </div>
 
-          <!-- Mobile Menu Button -->
-          <div class="md:hidden">
-            <button
-              id="menu-toggle"
-              class="text-2xl hover:text-gray-500 transition-colors"
-            >
-              &#9776;
-            </button>
-          </div>
+        <!-- Desktop Menu -->
+        <div class="hidden md:flex items-center space-x-8 font-sans text-sm tracking-wide uppercase font-bold">
+          <a href="/puzzles/leaderboard.html" class="hover:text-gray-500 transition-colors">Leaderboard</a>
+          <a href="/index.html" class="hover:text-gray-500 transition-colors">Home</a>
+          <a href="/contact.html" class="hover:text-gray-500 transition-colors">Contact</a>
+          
+          <!-- Theme Toggle -->
+          <button id="theme-toggle" class="focus:outline-none hover:text-gray-500 transition-colors p-2 rounded-md">
+            <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
+              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>
+            </svg>
+            <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
+              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
+            </svg>
+          </button>
         </div>
-      </nav>
-    </div>
 
-    <!-- Mobile Menu Overlay -->
-    <div
-      id="menu"
-      class="fixed top-0 left-0 w-screen h-screen bg-black/95 text-white z-[100] transform translate-x-full transition-transform duration-300 md:hidden flex flex-col justify-center items-center space-y-8 font-sans text-2xl uppercase tracking-widest"
-    >
-      <button
-        id="close-menu"
-        class="absolute top-6 right-6 text-4xl hover:text-gray-400"
-      >
-        &times;
-      </button>
-      <a href="/puzzles/leaderboard.html" class="hover:text-gray-400"
-        >Leaderboard</a
-      >
-      <a href="/index.html" class="hover:text-gray-400">Home</a>
-      <a href="/contact.html" class="hover:text-gray-400">Contact</a>
-    </div>
+        <!-- Mobile Menu Button -->
+        <div class="md:hidden">
+          <button id="menu-toggle" class="text-2xl hover:text-gray-500 transition-colors">&#9776;</button>
+        </div>
+      </div>
+    </nav>
+  </div>
+
+  <!-- Mobile Menu Overlay -->
+  <div id="menu" class="fixed top-0 left-0 w-screen h-screen bg-black/95 text-white z-[100] transform translate-x-full transition-transform duration-300 md:hidden flex flex-col justify-center items-center space-y-8 font-sans text-2xl uppercase tracking-widest">
+    <button id="close-menu" class="absolute top-6 right-6 text-4xl hover:text-gray-400">&times;</button>
+    <a href="/puzzles/leaderboard.html" class="hover:text-gray-400">Leaderboard</a>
+    <a href="/index.html" class="hover:text-gray-400">Home</a>
+    <a href="/contact.html" class="hover:text-gray-400">Contact</a>
+  </div>
 
-    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
-      <div
-        class="flex justify-center mb-12 text-xl font-serif italic text-gray-500 dark:text-gray-400"
-      >
-        Weekly puzzles to work your brain!
+  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
+    <div class="flex justify-center mb-12 text-xl font-serif italic text-gray-500 dark:text-gray-400">
+      Weekly puzzles to work your brain!
+    </div>
+    <div
+      class="flex flex-col md:flex-row md:items-start mb-16 border-l border-r border-gray-200 dark:border-gray-800 px-6 lg:px-10 py-8 lg:py-12 gap-x-12">
+      <div class="w-full flex flex-col gap-y-8">
+        <div class="puzzle-question">
+          <h2 class="text-4xl font-bold mb-6 leading-tight">Odd Sevens Out</h2>
+          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
+            Let $a_n$ be the number of $n$-digits numbers made from $5,6,7,8,9$ which have an odd number of $7$'s. <br>
+            Find $2a_{100}$ (do not include any parentheses in your answer, in case your answer contains an exponentiation
+            sign you may use $\hat{}$ symbol for exponentiation).
+          </p>
+        </div>
       </div>
-      <div
-        class="flex flex-col md:flex-row md:items-start mb-16 border-l border-r border-gray-200 dark:border-gray-800 px-6 lg:px-10 py-8 lg:py-12 gap-x-12"
-      >
-        <div class="w-full flex flex-col gap-y-8">
-          <div class="puzzle-question">
-            <h2 class="text-4xl font-bold mb-6 leading-tight">
-              Odd Sevens Out
-            </h2>
-            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
-              Let $a_n$ be the number of $n$-digits numbers made from
-              $5,6,7,8,9$ which have an odd number of $7$'s. <br />
-              Find $2a_{100}$ (do not include any parentheses in your answer, in
-              case your answer contains an exponentiation sign you may use
-              $\hat{}$ symbol for exponentiation).
+    </div>
+    <div id="carouselExample"
+      class="carousel slide border-t border-b border-gray-200 dark:border-gray-800 py-12 md:px-20"
+      data-bs-touch="false" data-bs-keyboard="false" data-bs-wrap="false">
+      <div class="carousel-inner">
+        <div class="carousel-item active">
+          <div class="container text-center px-4">
+            <p class="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-8">
+              Sign in using your BITS Google account to submit your answer.
             </p>
+            <!-- Loading indicator -->
+            <div id="google-loading" class="text-center my-6" style="display: none">
+              <div class="spinner-border text-gray-900 dark:text-gray-100" role="status">
+                <span class="visually-hidden">Signing in...</span>
+              </div>
+            </div>
+            <!-- Google Sign-in Button -->
+            <div id="google-signin-container" class="text-center flex justify-center">
+              <div id="g_id_onload"
+                data-client_id="32276754299-ni4aa81u2j53q07ke15nhr4oq8ap9t8f.apps.googleusercontent.com"
+                data-callback="handleCredentialResponse" data-auto_prompt="false"></div>
+              <div class="g_id_signin" data-type="standard" data-theme="outline" data-size="large"></div>
+            </div>
           </div>
         </div>
-      </div>
-      <div
-        id="carouselExample"
-        class="carousel slide border-t border-b border-gray-200 dark:border-gray-800 py-12 md:px-20"
-        data-bs-touch="false"
-        data-bs-keyboard="false"
-        data-bs-wrap="false"
-      >
-        <div class="carousel-inner">
-          <div class="carousel-item active">
-            <div class="container text-center px-4">
-              <p
-                class="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-8"
-              >
-                Sign in using your BITS Google account to submit your answer.
-              </p>
-              <!-- Loading indicator -->
-              <div
-                id="google-loading"
-                class="text-center my-6"
-                style="display: none"
-              >
-                <div
-                  class="spinner-border text-gray-900 dark:text-gray-100"
-                  role="status"
-                >
-                  <span class="visually-hidden">Signing in...</span>
-                </div>
+        <div class="carousel-item">
+          <div class="container text-center px-4">
+            <form id="response-form" class="max-w-xl mx-auto">
+              <div class="mb-8">
+                <label for="response" class="block text-sm font-sans font-bold uppercase tracking-widest text-gray-500 mb-3">Your Response</label>
+                <input type="text" id="response" class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-none focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white transition-colors font-serif text-lg" placeholder="Enter Your Response"
+                  required />
               </div>
-              <!-- Google Sign-in Button -->
-              <div
-                id="google-signin-container"
-                class="text-center flex justify-center"
-              >
-                <div
-                  id="g_id_onload"
-                  data-client_id="32276754299-ni4aa81u2j53q07ke15nhr4oq8ap9t8f.apps.googleusercontent.com"
-                  data-callback="handleCredentialResponse"
-                  data-auto_prompt="false"
-                ></div>
-                <div
-                  class="g_id_signin"
-                  data-type="standard"
-                  data-theme="outline"
-                  data-size="large"
-                ></div>
+              <div class="flex justify-center gap-x-6">
+                <button class="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-sans font-bold uppercase tracking-widest text-xs hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors back-btn">
+                  Back
+                </button>
+                <button type="submit" class="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-sans font-bold uppercase tracking-widest text-xs hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
+                  Submit
+                </button>
               </div>
-            </div>
+            </form>
           </div>
-          <div class="carousel-item">
-            <div class="container text-center px-4">
-              <form id="response-form" class="max-w-xl mx-auto">
-                <div class="mb-8">
-                  <label
-                    for="response"
-                    class="block text-sm font-sans font-bold uppercase tracking-widest text-gray-500 mb-3"
-                    >Your Response</label
-                  >
-                  <input
-                    type="text"
-                    id="response"
-                    class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-none focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white transition-colors font-serif text-lg"
-                    placeholder="Enter Your Response"
-                    required
-                  />
-                </div>
-                <div class="flex justify-center gap-x-6">
-                  <button
-                    class="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-sans font-bold uppercase tracking-widest text-xs hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors back-btn"
-                  >
-                    Back
-                  </button>
-                  <button
-                    type="submit"
-                    class="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-sans font-bold uppercase tracking-widest text-xs hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
-                  >
-                    Submit
-                  </button>
-                </div>
-              </form>
-            </div>
-          </div>
-          <div class="carousel-item h-auto">
-            <div
-              class="container text-center w-full flex flex-row justify-center items-center gap-x-10"
-            >
-              <div class="w-full md:w-3/4 lg:w-2/3 text-left">
-                <div class="prose prose-lg dark:prose-invert max-w-none">
-                  <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
-                    $a_n$ denotes the number of $n$-digit numbers made from
-                    $5,6,7,8,9$ which have an odd number of $7$'s.<br />
+        </div>
+        <div class="carousel-item h-auto">
+          <div class="container text-center w-full flex flex-row justify-center items-center gap-x-10">
+            <div class="w-full md:w-3/4 lg:w-2/3 text-left">
+              <div class="prose prose-lg dark:prose-invert max-w-none">
+                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
+                  $a_n$ denotes the number of $n$-digit numbers made from $5,6,7,8,9$ which have an odd number of $7$'s.<br/>
 
-                    Let $b_n$ denote the number of $n$-digit numbers made from
-                    $5,6,7,8,9$ which have an even number of $7$'s. Let there be
-                    $n$-spots for the $n$-digit number $\\\\...\\$, the first
-                    $(n-1)$ spots can be filled in $a_{n-1}$ ways which is
-                    followed by the last spot which can be filled in $4$ ways,
-                    if the last spot is a $7$ then we can fill the remaining
-                    $(n-1)$ spots in $b_{n-1}$ ways.<br />
+                  Let $b_n$ denote the number of $n$-digit numbers made from $5,6,7,8,9$ which have an even number of
+                  $7$'s. Let there be $n$-spots for the $n$-digit number $\\\\...\\$, the first $(n-1)$ spots can be
+                  filled in $a_{n-1}$ ways which is followed by the last spot which can be filled in $4$ ways, if the last
+                  spot is a $7$ then we can fill the remaining $(n-1)$ spots in $b_{n-1}$ ways.<br/>
 
-                    Thus, we have the recurrence relation
-                    $a_n=4a_{n-1}+b_{n-1}$. Similarly, for $b_n$ the first
-                    $(n-1)$ spots can be filled in $b_{n-1}$ ways which is
-                    followed by the last spot which can be filled in $4$ ways,
-                    if the last spot is a $7$ then we can fill the remaining
-                    $(n-1)$ spots in $a_{n-1}$ ways, thus we have the recurrence
-                    relation $b_n=4b_{n-1}+a_{n-1}$.<br />
+                  Thus, we have the recurrence relation $a_n=4a_{n-1}+b_{n-1}$. Similarly, for $b_n$ the first $(n-1)$
+                  spots can be filled
+                  in $b_{n-1}$ ways which is followed by the last spot which can be filled in $4$ ways, if the last spot
+                  is a $7$ then we can fill the remaining $(n-1)$ spots in $a_{n-1}$ ways, thus we have the recurrence
+                  relation $b_n=4b_{n-1}+a_{n-1}$.<br/>
 
-                    We can simply compute $a_1$ and $b_1$ without the
-                    recurrence. $a_1=1$, $b_1=4$.<br />
+                  We can simply compute $a_1$ and $b_1$ without the recurrence. $a_1=1$, $b_1=4$.<br/>
 
-                    Now, $(a_n+b_n)=5(a_{n-1}+b_{n-1})$ and
-                    $(b_n-a_n)=3(b_{n-1}-a_{n-1})$. From this we know that
-                    $(a_n+b_n)$ forms a G.P. with common ratio $5$ and first
-                    term $5$ and $(b_n-a_n)$ forms a G.P. with common ratio $3$
-                    and first term 3.<br />
+                  Now, $(a_n+b_n)=5(a_{n-1}+b_{n-1})$ and $(b_n-a_n)=3(b_{n-1}-a_{n-1})$. From this we know that
+                  $(a_n+b_n)$ forms a G.P. with common ratio $5$ and first term $5$ and $(b_n-a_n)$ forms a G.P. with
+                  common ratio $3$ and first term 3.<br/>
 
-                    Thus, $(a_n+b_n)=5^n$ and $(b_n-a_n)=3^n$. This gives us
-                    that $a_n=\frac{5^n-3^n}{2}$. Thus,
-                    $2a_{100}=5^{100}-3^{100}$.
-                  </p>
-                </div>
+                  Thus, $(a_n+b_n)=5^n$ and $(b_n-a_n)=3^n$. This gives us that $a_n=\frac{5^n-3^n}{2}$. Thus,
+                  $2a_{100}=5^{100}-3^{100}$.
+                </p>
               </div>
             </div>
           </div>
         </div>
       </div>
-    </main>
-    <div class="correct-modal modal hidden">
-      <div class="bg-white border-4 border-green-500 rounded-lg p-8 max-w-md">
-        <div class="tick-mark flex justify-center">
-          <svg
-            xmlns="http://www.w3.org/2000/svg"
-            x="0px"
-            y="0px"
-            width="100"
-            height="100"
-            viewBox="0 0 48 48"
-          >
-            <path
-              fill="#c8e6c9"
-              d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
-            ></path>
-            <path
-              fill="#4caf50"
-              d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"
-            ></path>
-          </svg>
-        </div>
-        <div class="correct-text text-center">
-          <h2 class="text-2xl mb-6">Correct!</h2>
-          <p class="text-base">Well done! Your answer is correct.</p>
-          <div class="flex justify-center">
-            <button
-              class="close-btn bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded mt-4"
-            >
-              OK
-            </button>
-          </div>
-        </div>
-      </div>
     </div>
-    <div class="incorrect-modal modal hidden">
-      <div class="bg-white border-4 border-red-500 rounded-lg p-8 max-w-md">
-        <div class="cross-mark flex justify-center">
-          <svg
-            xmlns="http://www.w3.org/2000/svg"
-            x="0px"
-            y="0px"
-            width="100"
-            height="100"
-            viewBox="0 0 48 48"
-          >
-            <path
-              fill="#f44336"
-              d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
-            ></path>
-            <path
-              fill="#fff"
-              d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"
-            ></path>
-            <path
-              fill="#fff"
-              d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"
-            ></path>
-          </svg>
-        </div>
-        <div
-          class="incorrect-text flex flex-col justify-center text-center"
-        ></div>
+  </main>
+  <div class="correct-modal modal hidden">
+    <div class="bg-white border-4 border-green-500 rounded-lg p-8 max-w-md">
+      <div class="tick-mark flex justify-center">
+        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
+          <path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
+          <path fill="#4caf50"
+            d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path>
+        </svg>
+      </div>
+      <div class="correct-text text-center">
+        <h2 class="text-2xl mb-6">Correct!</h2>
+        <p class="text-base">Well done! Your answer is correct.</p>
         <div class="flex justify-center">
-          <button
-            class="close-btn bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded mt-4"
-          >
+          <button class="close-btn bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded mt-4">
             OK
           </button>
         </div>
       </div>
     </div>
-    <div class="attempts-complete modal hidden">
-      <div
-        class="bg-white border-4 border-gray-500 rounded-lg p-8 max-w-md text-center"
-      >
-        <h2 class="text-2xl mb-6">No attempts left!</h2>
-        <p class="mb-4">
-          You have used all your attempts! Come back next week.
-        </p>
-        <div class="flex justify-center">
-          <button
-            class="close-btn bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded"
-          >
-            OK
-          </button>
-        </div>
+  </div>
+  <div class="incorrect-modal modal hidden">
+    <div class="bg-white border-4 border-red-500 rounded-lg p-8 max-w-md">
+      <div class="cross-mark flex justify-center">
+        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
+          <path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
+          <path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"></path>
+          <path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"></path>
+        </svg>
+      </div>
+      <div class="incorrect-text flex flex-col justify-center text-center"></div>
+      <div class="flex justify-center">
+        <button class="close-btn bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded mt-4">
+          OK
+        </button>
       </div>
     </div>
-    <div class="already-submitted modal hidden">
-      <div
-        class="bg-white border-4 border-blue-500 rounded-lg p-8 max-w-md text-center"
-      >
-        <div class="info-mark flex justify-center mb-4">
-          <svg
-            xmlns="http://www.w3.org/2000/svg"
-            x="0px"
-            y="0px"
-            width="100"
-            height="100"
-            viewBox="0 0 48 48"
-          >
-            <path
-              fill="#2196f3"
-              d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
-            ></path>
-            <path fill="#fff" d="M22 22h4v11h-4V22zM22 15h4v4h-4V15z"></path>
-          </svg>
-        </div>
-        <h2 class="text-2xl mb-4">Already Submitted!</h2>
-        <p class="mb-4">
-          You've already submitted a correct answer for this week's puzzle.
-        </p>
-        <div class="flex justify-center">
-          <button
-            class="close-btn bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
-          >
-            View Solution
-          </button>
-        </div>
+  </div>
+  <div class="attempts-complete modal hidden">
+    <div class="bg-white border-4 border-gray-500 rounded-lg p-8 max-w-md text-center">
+      <h2 class="text-2xl mb-6">No attempts left!</h2>
+      <p class="mb-4">You have used all your attempts! Come back next week.</p>
+      <div class="flex justify-center">
+        <button class="close-btn bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded">
+          OK
+        </button>
       </div>
     </div>
-    <script src="/scripts/darkMode.js"></script>
-    <script src="/scripts/config.js"></script>
-    <script src="/scripts/index.js"></script>
-    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
-    <script>
-      window.MathJax = {
-        tex: {
-          inlineMath: [
-            ['$', '$'],
-            ['\\(', '\\)'],
-          ],
-          displayMath: [
-            ['$$', '$$'],
-            ['\\[', '\\]'],
-          ],
-        },
-        chtml: {
-          scale: 1,
-          minScale: 0.5,
-        },
-      };
-    </script>
-    <script
-      id="MathJax-script"
-      async
-      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
-    ></script>
-  </body>
-</html>
+  </div>
+  <div class="already-submitted modal hidden">
+    <div class="bg-white border-4 border-blue-500 rounded-lg p-8 max-w-md text-center">
+      <div class="info-mark flex justify-center mb-4">
+        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
+          <path fill="#2196f3" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
+          <path fill="#fff" d="M22 22h4v11h-4V22zM22 15h4v4h-4V15z"></path>
+        </svg>
+      </div>
+      <h2 class="text-2xl mb-4">Already Submitted!</h2>
+      <p class="mb-4">
+        You've already submitted a correct answer for this week's puzzle.
+      </p>
+      <div class="flex justify-center">
+        <button class="close-btn bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
+          View Solution
+        </button>
+      </div>
+    </div>
+  </div>
+  <script src="/scripts/darkMode.js"></script>
+  <script src="/scripts/config.js"></script>
+  <script src="/scripts/index.js"></script>
+  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
+  <script>
+    window.MathJax = {
+      tex: {
+        inlineMath: [
+          ["$", "$"],
+          ["\\(", "\\)"],
+        ],
+        displayMath: [
+          ["$$", "$$"],
+          ["\\[", "\\]"],
+        ],
+      },
+      chtml: {
+        scale: 1,
+        minScale: 0.5
+      }
+    };
+  </script>
+  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
+</body>
+
+</html>
\ No newline at end of file
diff --git a/puzzles/leaderboard.html b/puzzles/leaderboard.html
index 6e9ea16..634b846 100644
--- a/puzzles/leaderboard.html
+++ b/puzzles/leaderboard.html
@@ -1,319 +1,255 @@
-<!doctype html>
+<!DOCTYPE html>
 <html lang="en">
-  <head>
-    <meta charset="UTF-8" />
-    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
-    <title>Leaderboard - Puzzles 2 Puzzle U</title>
-    <script src="https://cdn.tailwindcss.com"></script>
-    <script>
-      tailwind.config = {
-        darkMode: 'class',
-        theme: {
-          extend: {
-            fontFamily: {
-              serif: ['Merriweather', 'serif'],
-              sans: ['Lato', 'sans-serif'],
-            },
-            colors: {
-              gray: {
-                850: '#1f2937',
-                950: '#030712',
-              },
-            },
-          },
-        },
-      };
-    </script>
-    <link rel="preconnect" href="https://fonts.googleapis.com" />
-    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
-    <link
-      href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap"
-      rel="stylesheet"
-    />
-    <link rel="stylesheet" href="/styles/styles.css" />
-    <link rel="stylesheet" href="/styles/fonts.css" />
-    <link
-      rel="icon"
-      type="image/png"
-      href="/favicon/favicon-96x96-2.png"
-      sizes="96x96"
-    />
-    <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
-    <link rel="shortcut icon" href="/favicon/favicon-2.ico" />
-    <link
-      rel="apple-touch-icon-2"
-      sizes="180x180"
-      href="/favicon/apple-touch-icon-2.png"
-    />
-    <link rel="manifest" href="/favicon/site.webmanifest" />
-  </head>
-
-  <body
-    class="!bg-white dark:!bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300 font-serif antialiased selection:bg-gray-200 dark:selection:bg-gray-800"
-  >
-    <div
-      class="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800"
-    >
-      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
-        <div class="flex justify-between items-center h-20">
-          <!-- Logo / Brand -->
-          <div class="flex items-center gap-4">
-            <div class="border border-gray-900 dark:border-gray-100 p-1">
-              <img
-                src="/assets/massocicon.jpg"
-                alt="Logo"
-                class="h-8 w-8 dark:grayscale"
-              />
-            </div>
-            <div class="flex flex-col leading-none">
-              <a
-                href="puzzles/index.html"
-                class="text-xl font-bold tracking-tight hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-sans uppercase"
-              >
-                Puzzles 2 Puzzle U
-              </a>
-              <span
-                class="text-xs text-gray-500 dark:text-gray-400 font-sans tracking-widest uppercase"
-                >Maths Assoc BITS Pilani</span
-              >
-            </div>
-          </div>
-
-          <!-- Desktop Menu -->
-          <div
-            class="hidden md:flex items-center space-x-8 font-sans text-sm tracking-wide uppercase font-bold"
-          >
-            <a
-              href="/puzzles/index.html"
-              class="hover:text-gray-500 transition-colors"
-              >This Week's Puzzle</a
-            >
-            <a href="/index.html" class="hover:text-gray-500 transition-colors"
-              >Home</a
-            >
-            <a
-              href="/contact.html"
-              class="hover:text-gray-500 transition-colors"
-              >Contact</a
-            >
-
-            <!-- Theme Toggle -->
-            <button
-              id="theme-toggle"
-              class="focus:outline-none hover:text-gray-500 transition-colors p-2 rounded-md"
-            >
-              <svg
-                id="theme-toggle-light-icon"
-                class="hidden w-5 h-5"
-                fill="currentColor"
-                viewBox="0 0 20 20"
-              >
-                <path
-                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
-                  fill-rule="evenodd"
-                  clip-rule="evenodd"
-                ></path>
-              </svg>
-              <svg
-                id="theme-toggle-dark-icon"
-                class="hidden w-5 h-5"
-                fill="currentColor"
-                viewBox="0 0 20 20"
-              >
-                <path
-                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
-                ></path>
-              </svg>
-            </button>
-          </div>
-
-          <!-- Mobile Menu Button -->
-          <div class="md:hidden">
-            <button
-              id="menu-toggle"
-              class="text-2xl hover:text-gray-500 transition-colors"
-            >
-              &#9776;
-            </button>
-          </div>
-        </div>
-      </nav>
-    </div>
-
-    <!-- Mobile Menu Overlay -->
-    <div
-      id="menu"
-      class="fixed top-0 left-0 w-screen h-screen bg-black/95 text-white z-[100] transform translate-x-full transition-transform duration-300 md:hidden flex flex-col justify-center items-center space-y-8 font-sans text-2xl uppercase tracking-widest"
-    >
-      <button
-        id="close-menu"
-        class="absolute top-6 right-6 text-4xl hover:text-gray-400"
-      >
-        &times;
-      </button>
-      <a
-        href="/puzzles/index.html"
-        class="hover:text-gray-500 transition-colors"
-        >This Week's Puzzle</a
-      >
-      <a href="/index.html" class="hover:text-gray-400">Home</a>
-      <a href="/contact.html" class="hover:text-gray-400">Contact</a>
-    </div>
-
-    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
-      <div class="text-center mb-16">
-        <h1 class="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
-          Leaderboard
-        </h1>
-        <div class="h-1 w-20 bg-gray-900 dark:bg-gray-100 mx-auto"></div>
-      </div>
-
-      <!-- Loading indicator -->
-      <div id="loading" class="text-center my-12">
-        <div
-          class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100"
-        ></div>
-        <span class="sr-only">Loading...</span>
-      </div>
-
-      <!-- Leaderboard Table -->
-      <div class="overflow-x-auto">
-        <table class="w-full text-left border-collapse">
-          <thead>
-            <tr class="border-b-2 border-gray-900 dark:border-gray-100">
-              <th
-                class="py-4 px-4 font-sans font-bold uppercase tracking-widest text-sm w-24"
-              >
-                Rank
-              </th>
-              <th
-                class="py-4 px-4 font-sans font-bold uppercase tracking-widest text-sm"
-              >
-                Name
-              </th>
-              <th
-                class="py-4 px-4 font-sans font-bold uppercase tracking-widest text-sm text-right w-32"
-              >
-                Attempts
-              </th>
-              <th
-                class="py-4 px-4 font-sans font-bold uppercase tracking-widest text-sm text-right w-32"
-              >
-                Solved
-              </th>
-            </tr>
-          </thead>
-          <tbody
-            id="leaderboard-table-body"
-            class="divide-y divide-gray-200 dark:divide-gray-800"
-          >
-            <!-- Rows will be populated by JS -->
-          </tbody>
-        </table>
-      </div>
-
-      <div class="flex justify-center mt-12">
-        <button
-          id="refresh-leaderboard"
-          class="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-sans font-bold uppercase tracking-widest text-xs hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
-        >
-          Update Leaderboard
-        </button>
-      </div>
-    </main>
-
-    <script src="/scripts/darkMode.js"></script>
-    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
-    <script src="/scripts/config.js"></script>
-    <script src="/scripts/index.js"></script>
-    <script>
-      document.addEventListener('DOMContentLoaded', async () => {
-        const tbody = document.getElementById('leaderboard-table-body');
-        const loading = document.getElementById('loading');
-        try {
-          const res = await fetch(`${API_BASE}/leaderboard`);
-          const data = await res.json();
-          loading.style.display = 'none';
-          tbody.innerHTML = '';
-          data.forEach((entry, index) => {
-            const row = document.createElement('tr');
-            row.className =
-              'hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors';
-
-            const rankCell = document.createElement('td');
-            rankCell.className = 'py-4 px-4 font-bold';
-            rankCell.textContent = index + 1;
-
-            const nameCell = document.createElement('td');
-            nameCell.className = 'py-4 px-4';
-            nameCell.textContent = entry.name;
-
-            const attemptsCell = document.createElement('td');
-            attemptsCell.className = 'py-4 px-4 text-right font-mono';
-            attemptsCell.textContent = entry.totalAttempts || 0;
-
-            const solvedCell = document.createElement('td');
-            solvedCell.className = 'py-4 px-4 text-right font-mono font-bold';
-            solvedCell.textContent = entry.score;
-
-            row.appendChild(rankCell);
-            row.appendChild(nameCell);
-            row.appendChild(attemptsCell);
-            row.appendChild(solvedCell);
-            tbody.appendChild(row);
-          });
-        } catch (err) {
-          console.error('Error fetching leaderboard:', err);
-        }
-      });
-
-      const refreshLeaderboardBtn = document.getElementById(
-        'refresh-leaderboard',
-      );
-      async function refreshLeaderboard() {
-        const loader = document.getElementById('loading');
-        const body = document.getElementById('leaderboard-table-body');
-        loader.style.display = 'block';
-        try {
-          const response = await fetch(`${API_BASE}/leaderboard`, {
-            cache: 'no-store',
-          });
-          const items = await response.json();
-          body.replaceChildren();
-          items.forEach((item, idx) => {
-            const row = document.createElement('tr');
-            row.className =
-              'hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors';
-
-            const rankCell = document.createElement('td');
-            rankCell.className = 'py-4 px-4 font-bold';
-            rankCell.textContent = idx + 1;
-
-            const nameCell = document.createElement('td');
-            nameCell.className = 'py-4 px-4';
-            nameCell.textContent = item.name;
-
-            const attemptsCell = document.createElement('td');
-            attemptsCell.className = 'py-4 px-4 text-right font-mono';
-            attemptsCell.textContent = item.totalAttempts || 0;
-
-            const solvedCell = document.createElement('td');
-            solvedCell.className = 'py-4 px-4 text-right font-mono font-bold';
-            solvedCell.textContent = item.score;
-
-            row.appendChild(rankCell);
-            row.appendChild(nameCell);
-            row.appendChild(attemptsCell);
-            row.appendChild(solvedCell);
-            body.appendChild(row);
-          });
-        } catch (error) {
-          console.error('Unable to update leaderboard:', error);
-        } finally {
-          loader.style.display = 'none';
-        }
-      }
-      refreshLeaderboardBtn.addEventListener('click', refreshLeaderboard);
-    </script>
-  </body>
+	<head>
+		<meta charset="UTF-8" />
+		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
+		<title>Leaderboard - Puzzles 2 Puzzle U</title>
+		<script src="https://cdn.tailwindcss.com"></script>
+		<script>
+			tailwind.config = {
+				darkMode: "class",
+				theme: {
+					extend: {
+						fontFamily: {
+							serif: ["Merriweather", "serif"],
+							sans: ["Lato", "sans-serif"],
+						},
+						colors: {
+							gray: {
+								850: "#1f2937",
+								950: "#030712",
+							},
+						},
+					},
+				},
+			};
+		</script>
+		<link rel="preconnect" href="https://fonts.googleapis.com" />
+		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
+		<link
+			href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap"
+			rel="stylesheet" />
+		<link rel="stylesheet" href="/styles/styles.css" />
+		<link rel="stylesheet" href="/styles/fonts.css" />
+		<link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
+		<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
+		<link rel="shortcut icon" href="/favicon/favicon.ico" />
+		<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
+		<link rel="manifest" href="/favicon/site.webmanifest" />
+	</head>
+
+	<body
+		class="!bg-white dark:!bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300 font-serif antialiased selection:bg-gray-200 dark:selection:bg-gray-800">
+		<div
+			class="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
+			<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
+				<div class="flex justify-between items-center h-20">
+					<!-- Logo / Brand -->
+					<div class="flex items-center gap-4">
+						<div class="border border-gray-900 dark:border-gray-100 p-1">
+							<img src="/assets/massocicon.jpg" alt="Logo" class="h-8 w-8 dark:grayscale" />
+						</div>
+						<div class="flex flex-col leading-none">
+							<a
+								href="puzzles/index.html"
+								class="text-xl font-bold tracking-tight hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-sans uppercase">
+								Puzzles 2 Puzzle U
+							</a>
+							<span
+								class="text-xs text-gray-500 dark:text-gray-400 font-sans tracking-widest uppercase"
+								>Maths Assoc BITS Pilani</span
+							>
+						</div>
+					</div>
+
+					<!-- Desktop Menu -->
+					<div
+						class="hidden md:flex items-center space-x-8 font-sans text-sm tracking-wide uppercase font-bold">
+						<a href="/puzzles/index.html" class="hover:text-gray-500 transition-colors"
+							>This Week's Puzzle</a
+						>
+						<a href="/index.html" class="hover:text-gray-500 transition-colors">Home</a>
+						<a href="/contact.html" class="hover:text-gray-500 transition-colors">Contact</a>
+
+						<!-- Theme Toggle -->
+						<button
+							id="theme-toggle"
+							class="focus:outline-none hover:text-gray-500 transition-colors p-2 rounded-md">
+							<svg
+								id="theme-toggle-light-icon"
+								class="hidden w-5 h-5"
+								fill="currentColor"
+								viewBox="0 0 20 20">
+								<path
+									d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
+									fill-rule="evenodd"
+									clip-rule="evenodd"></path>
+							</svg>
+							<svg
+								id="theme-toggle-dark-icon"
+								class="hidden w-5 h-5"
+								fill="currentColor"
+								viewBox="0 0 20 20">
+								<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
+							</svg>
+						</button>
+					</div>
+
+					<!-- Mobile Menu Button -->
+					<div class="md:hidden">
+						<button id="menu-toggle" class="text-2xl hover:text-gray-500 transition-colors">
+							&#9776;
+						</button>
+					</div>
+				</div>
+			</nav>
+		</div>
+
+		<!-- Mobile Menu Overlay -->
+		<div
+			id="menu"
+			class="fixed top-0 left-0 w-screen h-screen bg-black/95 text-white z-[100] transform translate-x-full transition-transform duration-300 md:hidden flex flex-col justify-center items-center space-y-8 font-sans text-2xl uppercase tracking-widest">
+			<button id="close-menu" class="absolute top-6 right-6 text-4xl hover:text-gray-400">
+				&times;
+			</button>
+			<a href="/puzzles/index.html" class="hover:text-gray-500 transition-colors">This Week's Puzzle</a>
+			<a href="/index.html" class="hover:text-gray-400">Home</a>
+			<a href="/contact.html" class="hover:text-gray-400">Contact</a>
+		</div>
+
+		<main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
+			<div class="text-center mb-16">
+				<h1 class="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Leaderboard</h1>
+				<div class="h-1 w-20 bg-gray-900 dark:bg-gray-100 mx-auto"></div>
+			</div>
+
+			<!-- Loading indicator -->
+			<div id="loading" class="text-center my-12">
+				<div
+					class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100"></div>
+				<span class="sr-only">Loading...</span>
+			</div>
+
+			<!-- Leaderboard Table -->
+			<div class="overflow-x-auto">
+				<table class="w-full text-left border-collapse">
+					<thead>
+						<tr class="border-b-2 border-gray-900 dark:border-gray-100">
+							<th class="py-4 px-4 font-sans font-bold uppercase tracking-widest text-sm w-24">
+								Rank
+							</th>
+							<th class="py-4 px-4 font-sans font-bold uppercase tracking-widest text-sm">Name</th>
+							<th
+								class="py-4 px-4 font-sans font-bold uppercase tracking-widest text-sm text-right w-32">
+								Attempts
+							</th>
+							<th
+								class="py-4 px-4 font-sans font-bold uppercase tracking-widest text-sm text-right w-32">
+								Solved
+							</th>
+						</tr>
+					</thead>
+					<tbody id="leaderboard-table-body" class="divide-y divide-gray-200 dark:divide-gray-800">
+						<!-- Rows will be populated by JS -->
+					</tbody>
+				</table>
+			</div>
+
+			<div class="flex justify-center mt-12">
+				<button
+					id="refresh-leaderboard"
+					class="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-sans font-bold uppercase tracking-widest text-xs hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
+					Update Leaderboard
+				</button>
+			</div>
+		</main>
+
+		<script src="/scripts/darkMode.js"></script>
+		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
+		<script src="/scripts/config.js"></script>
+		<script src="/scripts/index.js"></script>
+		<script>
+			document.addEventListener("DOMContentLoaded", async () => {
+				const tbody = document.getElementById("leaderboard-table-body");
+				const loading = document.getElementById("loading");
+				try {
+					const res = await fetch(`${API_BASE}/leaderboard`);
+					const data = await res.json();
+					loading.style.display = "none";
+					tbody.innerHTML = "";
+					data.forEach((entry, index) => {
+						const row = document.createElement("tr");
+						row.className = "hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors";
+
+						const rankCell = document.createElement("td");
+						rankCell.className = "py-4 px-4 font-bold";
+						rankCell.textContent = index + 1;
+
+						const nameCell = document.createElement("td");
+						nameCell.className = "py-4 px-4";
+						nameCell.textContent = entry.name;
+
+						const attemptsCell = document.createElement("td");
+						attemptsCell.className = "py-4 px-4 text-right font-mono";
+						attemptsCell.textContent = entry.totalAttempts || 0;
+
+						const solvedCell = document.createElement("td");
+						solvedCell.className = "py-4 px-4 text-right font-mono font-bold";
+						solvedCell.textContent = entry.score;
+
+						row.appendChild(rankCell);
+						row.appendChild(nameCell);
+						row.appendChild(attemptsCell);
+						row.appendChild(solvedCell);
+						tbody.appendChild(row);
+					});
+				} catch (err) {
+					console.error("Error fetching leaderboard:", err);
+				}
+			});
+
+			const refreshLeaderboardBtn = document.getElementById("refresh-leaderboard");
+			async function refreshLeaderboard() {
+				const loader = document.getElementById("loading");
+				const body = document.getElementById("leaderboard-table-body");
+				loader.style.display = "block";
+				try {
+					const response = await fetch(`${API_BASE}/leaderboard`, { cache: "no-store" });
+					const items = await response.json();
+					body.replaceChildren();
+					items.forEach((item, idx) => {
+						const row = document.createElement("tr");
+						row.className = "hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors";
+
+						const rankCell = document.createElement("td");
+						rankCell.className = "py-4 px-4 font-bold";
+						rankCell.textContent = idx + 1;
+
+						const nameCell = document.createElement("td");
+						nameCell.className = "py-4 px-4";
+						nameCell.textContent = item.name;
+
+						const attemptsCell = document.createElement("td");
+						attemptsCell.className = "py-4 px-4 text-right font-mono";
+						attemptsCell.textContent = item.totalAttempts || 0;
+
+						const solvedCell = document.createElement("td");
+						solvedCell.className = "py-4 px-4 text-right font-mono font-bold";
+						solvedCell.textContent = item.score;
+
+						row.appendChild(rankCell);
+						row.appendChild(nameCell);
+						row.appendChild(attemptsCell);
+						row.appendChild(solvedCell);
+						body.appendChild(row);
+					});
+				} catch (error) {
+					console.error("Unable to update leaderboard:", error);
+				} finally {
+					loader.style.display = "none";
+				}
+			}
+			refreshLeaderboardBtn.addEventListener("click", refreshLeaderboard);
+		</script>
+	</body>
 </html>
diff --git a/scripts/article-view.js b/scripts/article-view.js
index 3b5dd39..5644fee 100644
--- a/scripts/article-view.js
+++ b/scripts/article-view.js
@@ -1,3 +1,4 @@
+
 let currentArticle = null;
 let isPreviewMode = false;
 
