
    <!-- كود الجافا سكريبت لتشغيل الأنيميشن -->
    <script>
        // أنيميشن عند تحميل الصفحة للـ Hero
        ScrollReveal().reveal('.animate-hero', {
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            duration: 1000,
            interval: 200
        });

        // أنيميشن ظهور السكاشن تدريجياً أثناء الـ Scroll
        ScrollReveal().reveal('.reveal-section', {
            delay: 150,
            distance: '60px',
            origin: 'bottom',
            duration: 1000,
            viewFactor: 0.2
        });

        // تشغيل تأثيرات على كروت الخدمات
        ScrollReveal().reveal('.service-card', {
            delay: 100,
            distance: '40px',
            origin: 'bottom',
            duration: 800,
            interval: 150
        });
    </script>
