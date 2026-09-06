document.querySelectorAll('.tab-tombol').forEach(btn=>{
    btn.addEventListener('click',()=>{
        const target = btn.dataset.target;

        document.querySelectorAll('.tab-konten').forEach(el=>{
            el.classList.remove('active');
        });

        document.getElementById(target).classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {

  function waitForBootstrap(callback) {
      if (typeof bootstrap !== "undefined") {
          callback();
      } else {
          setTimeout(function() {
              waitForBootstrap(callback);
          }, 50);
      }
  }

  waitForBootstrap(function() {

      // =========================
      // BUKA MODAL DARI HASH
      // =========================
      function openModalFromHash() {

          const hash = window.location.hash.replace("#", "");

          if (!hash) return;

          const modalElement = document.getElementById(hash);

          if (modalElement && modalElement.classList.contains("modal")) {

              const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement);

              modalInstance.show();
          }

      }

      // =========================
      // UPDATE HASH SAAT MODAL DIBUKA
      // =========================
      document.querySelectorAll('[data-bs-toggle="modal"]').forEach(trigger => {

          trigger.addEventListener("click", function() {

              const target = this.getAttribute("data-bs-target");

              if (!target) return;

              const modalId = target.replace("#", "");

              history.replaceState(null, null, "#" + modalId);

          });

      });

      // =========================
      // HAPUS HASH SAAT MODAL TUTUP
      // =========================
      document.querySelectorAll(".modal").forEach(modal => {

          modal.addEventListener("hidden.bs.modal", function() {

              if (window.location.hash === "#" + modal.id) {

                  history.replaceState(
                      "",
                      document.title,
                      window.location.pathname + window.location.search
                  );

              }

          });

      });

      // =========================
      // HASH CHANGE
      // =========================
      window.addEventListener("hashchange", openModalFromHash);

      // =========================
      // FIRST LOAD
      // =========================
      openModalFromHash();

  });

});
    document.addEventListener('DOMContentLoaded', () => {
        // Elements
        const navbarToggler = document.getElementById('navbarToggler');
        const navbarContent = document.getElementById('navbarContent');
        const notifBell = document.getElementById('notifBell');
        const notifMenu = document.getElementById('notifMenu');
        const userAvatar = document.getElementById('user-menu-avatar');
        const userMenu = document.getElementById('userMenu');

        // Toggle Mobile Menu
        if (navbarToggler && navbarContent) {
            navbarToggler.addEventListener('click', (e) => {
                e.stopPropagation();
                const isHidden = navbarContent.classList.contains('hidden');
                if (isHidden) {
                    navbarContent.classList.remove('hidden');
                    navbarToggler.setAttribute('aria-expanded', 'true');
                } else {
                    navbarContent.classList.add('hidden');
                    navbarToggler.setAttribute('aria-expanded', 'false');
                }
            });
        }

        // Toggle Notification Dropdown
        if (notifBell && notifMenu) {
            notifBell.addEventListener('click', (e) => {
                e.stopPropagation();
                const isHidden = notifMenu.classList.contains('hidden');
                closeAllDropdowns();
                if (isHidden) {
                    notifMenu.classList.remove('hidden');
                    notifMenu.classList.add('flex');
                    notifBell.setAttribute('aria-expanded', 'true');
                }
            });
        }

        // Toggle User Avatar Dropdown
        if (userAvatar && userMenu) {
            userAvatar.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const isHidden = userMenu.classList.contains('hidden');
                closeAllDropdowns();
                if (isHidden) {
                    userMenu.classList.remove('hidden');
                    userAvatar.setAttribute('aria-expanded', 'true');
                }
            });
        }

        // Close all dropdowns when clicking outside
        document.addEventListener('click', () => {
            closeAllDropdowns();
        });

        function closeAllDropdowns() {
            if (notifMenu) {
                notifMenu.classList.add('hidden');
                notifMenu.classList.remove('flex');
                if (notifBell) notifBell.setAttribute('aria-expanded', 'false');
            }
            if (userMenu) {
                userMenu.classList.add('hidden');
                if (userAvatar) userAvatar.setAttribute('aria-expanded', 'false');
            }
        }

        // Prevent dropdown click inside from closing immediately
        if (notifMenu) notifMenu.addEventListener('click', (e) => e.stopPropagation());
        if (userMenu) userMenu.addEventListener('click', (e) => e.stopPropagation());
    });
