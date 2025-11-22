# Angular 21 Development Guidelines & Best Practices

## Core Principles
- **Performance First**: Leverage Angular's built-in optimization features (OnPush, signals, lazy loading)
- **Semantic HTML First**: Build accessibility into the foundation with proper HTML elements, not libraries
- **Type Safety**: Leverage TypeScript's full potential with strict mode enabled
- **Reactive Architecture**: Embrace RxJS and Angular Signals for state management
- **Component-Based**: Build reusable, testable, and maintainable components

## Angular 21 Architecture

### Project Structure
```
src/
├── app/
│   ├── core/                 # Singleton services, guards, interceptors
│   │   ├── services/
│   │   ├── guards/
│   │   └── interceptors/
│   ├── shared/               # Shared components, directives, pipes
│   │   ├── components/
│   │   ├── directives/
│   │   └── pipes/
│   ├── features/             # Feature modules (lazy loaded)
│   │   └── feature-name/
│   │       ├── components/
│   │       ├── services/
│   │       └── feature-name.routes.ts
│   └── app.config.ts         # Application configuration
├── assets/
├── environments/
└── styles/                   # Global styles and theme
```

### Component Best Practices
```typescript
// Use standalone components with signals
import { Component, signal, computed, effect, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="user-card" [attr.aria-label]="userLabel()">
      <img [src]="avatarUrl()" [alt]="user().name" loading="lazy" width="80" height="80">
      <h3>{{ user().name }}</h3>
      <p>{{ userStatus() }}</p>
      <button (click)="selectUser.emit(user())" 
              [attr.aria-pressed]="isSelected()">
        {{ isSelected() ? 'Selected' : 'Select' }}
      </button>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.selected]': 'isSelected()',
    'role': 'article'
  }
})
export class UserCardComponent {
  // Input signals (Angular 21)
  user = input.required<User>();
  isSelected = input<boolean>(false);
  
  // Output emitters
  selectUser = output<User>();
  
  // Computed signals for derived state
  avatarUrl = computed(() => 
    this.user().avatar || '/assets/default-avatar.svg'
  );
  
  userStatus = computed(() => 
    this.user().isActive ? 'Active' : 'Inactive'
  );
  
  userLabel = computed(() => 
    `User card for ${this.user().name}`
  );
  
  // Effects for side effects
  constructor() {
    effect(() => {
      console.log(`User selected: ${this.isSelected()}`);
    });
  }
}
```

## Semantic HTML Best Practices

### Use Native HTML Elements
```html
<!-- ✅ GOOD: Native semantic elements -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about" aria-current="page">About</a></li>
  </ul>
</nav>

<main>
  <article>
    <header>
      <h1>Article Title</h1>
      <time datetime="2024-01-15">January 15, 2024</time>
    </header>
    <section>
      <p>Content goes here...</p>
    </section>
    <footer>
      <address>
        Written by <a href="mailto:author@example.com">Author Name</a>
      </address>
    </footer>
  </article>
</main>

<!-- ❌ AVOID: Divs with ARIA roles when native elements exist -->
<div role="navigation">
  <div role="list">
    <div role="listitem">Home</div>
  </div>
</div>
```

### Form Elements & Labels
```html
<!-- Always associate labels with form controls -->
<label for="email">Email Address (required)</label>
<input 
  type="email" 
  id="email" 
  name="email"
  required 
  autocomplete="email"
  aria-describedby="email-hint email-error"
>
<span id="email-hint" class="hint">We'll never share your email</span>
<span id="email-error" role="alert" class="error" hidden>
  Please enter a valid email
</span>

<!-- Group related fields with fieldset -->
<fieldset>
  <legend>Billing Address</legend>
  <label for="street">Street Address</label>
  <input type="text" id="street" autocomplete="street-address">
  <!-- More address fields -->
</fieldset>

<!-- Use native validation attributes -->
<input 
  type="number" 
  min="1" 
  max="100" 
  step="1"
  pattern="[0-9]+"
>
```

### Interactive Elements
```html
<!-- Buttons vs Links -->
<!-- ✅ Links for navigation -->
<a href="/profile">View Profile</a>

<!-- ✅ Buttons for actions -->
<button type="button" onclick="deleteItem()">Delete</button>

<!-- ❌ AVOID: Wrong element for the job -->
<a href="#" onclick="deleteItem()">Delete</a>
<button onclick="location.href='/profile'">View Profile</button>

<!-- Ensure all interactive elements are keyboard accessible -->
<button 
  type="button"
  aria-pressed="false"
  aria-label="Toggle dark mode">
  🌙
</button>

<!-- Custom controls must have proper semantics -->
<div 
  role="switch"
  tabindex="0"
  aria-checked="false"
  aria-label="Enable notifications"
  onkeydown="if(event.key === ' ' || event.key === 'Enter') toggle()"
>
  <span class="switch-handle"></span>
</div>
```

### Content Structure
```html
<!-- Proper heading hierarchy -->
<h1>Page Title</h1>
  <h2>Section Title</h2>
    <h3>Subsection Title</h3>
    <h3>Another Subsection</h3>
  <h2>Another Section</h2>

<!-- Lists for grouped items -->
<ul>
  <li>Unordered item</li>
</ul>

<ol>
  <li>Step one</li>
  <li>Step two</li>
</ol>

<dl>
  <dt>Term</dt>
  <dd>Definition</dd>
</dl>

<!-- Tables for tabular data -->
<table>
  <caption>Monthly Sales Report</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">January</th>
      <td>$10,000</td>
    </tr>
  </tbody>
</table>

<!-- Details/Summary for collapsible content -->
<details>
  <summary>View more information</summary>
  <p>Additional content here...</p>
</details>
```

### ARIA Usage Guidelines
```html
<!-- Rule 1: Don't use ARIA if native HTML works -->
<!-- ✅ GOOD -->
<button disabled>Submit</button>

<!-- ❌ AVOID -->
<button aria-disabled="true">Submit</button>

<!-- Rule 2: Don't change native semantics unnecessarily -->
<!-- ❌ AVOID -->
<h2 role="button">Click me</h2>

<!-- ✅ GOOD -->
<h2><button>Click me</button></h2>

<!-- Rule 3: All interactive elements must be keyboard accessible -->
<!-- If using role="button", must handle keyboard -->
<div 
  role="button"
  tabindex="0"
  onclick="action()"
  onkeydown="if(event.key === 'Enter' || event.key === ' ') action()">
  Custom Button
</div>

<!-- Rule 4: Don't hide focusable elements -->
<!-- ❌ AVOID -->
<button aria-hidden="true">Click me</button>

<!-- Rule 5: All interactive elements need accessible names -->
<!-- Icon button needs label -->
<button aria-label="Close dialog">
  <span aria-hidden="true">×</span>
</button>
```

## CSS Architecture

### Modern CSS Features
```css
/* Use CSS Custom Properties for theming */
:root {
  --color-primary: #0066cc;
  --spacing-unit: 0.5rem;
  --font-body: system-ui, -apple-system, sans-serif;
}

/* Prefer logical properties for internationalization */
.card {
  margin-block: var(--spacing-unit);
  padding-inline: calc(var(--spacing-unit) * 2);
}

/* Use modern layout techniques */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-unit);
}

/* Container queries for component-based responsive design */
@container (min-width: 400px) {
  .card {
    display: flex;
  }
}
```

### CSS Performance
- Use CSS containment: `contain: layout style paint;`
- Prefer `transform` and `opacity` for animations (GPU-accelerated)
- Avoid expensive selectors (universal `*`, deep descendant chains)
- Use `will-change` sparingly and remove after animation
- Implement critical CSS inline, defer non-critical styles

### Responsive Design
```css
/* Mobile-first approach with min-width breakpoints */
.component {
  /* Base mobile styles */
}

@media (min-width: 768px) {
  .component {
    /* Tablet and up */
  }
}

/* Use clamp() for fluid typography */
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}

/* Prefer intrinsic sizing */
.container {
  width: min(100%, 1200px);
  margin-inline: auto;
}
```

## Accessibility (WCAG 2.1 AA Compliance)

## Semantic HTML & Native Accessibility

### Semantic Component Structure
```typescript
@Component({
  selector: 'app-article-card',
  standalone: true,
  template: `
    <article class="card" [attr.aria-labelledby]="headingId">
      <header>
        <h2 [id]="headingId">{{ title() }}</h2>
        <time [datetime]="publishDate()">
          {{ formattedDate() }}
        </time>
      </header>
      
      <main>
        <p>{{ content() }}</p>
      </main>
      
      <footer>
        <nav aria-label="Article actions">
          <ul>
            <li>
              <button type="button" 
                      [attr.aria-pressed]="isLiked()"
                      (click)="toggleLike()">
                <span aria-hidden="true">❤️</span>
                <span>{{ isLiked() ? 'Liked' : 'Like' }}</span>
              </button>
            </li>
            <li>
              <a [href]="shareUrl()" 
                 [attr.aria-label]="'Share ' + title()">
                Share
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </article>
  `,
  host: {
    'role': 'article',
    '[attr.aria-live]': 'isUpdating() ? "polite" : null'
  }
})
export class ArticleCardComponent {
  headingId = `article-${Math.random().toString(36).substr(2, 9)}`;
  // ... rest of component
}
```
