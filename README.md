
# ACF Icon Field

Provide an advanced SVG Icon field for ACF


## Installation

Install with composer

```bash
composer require agence-adeliom/acf-icon-field
```

## Usage/Examples

#### Use Font Awesome Pro instead of Free

1. Change Font Awesome registration

```php
add_filter( 'acf/icon_field/register_font-awesome', function() {
    return "pro";
});
```

2. Copy Font Awesome SVG Sprites following the [documentation](https://fontawesome.com/docs/web/add-icons/svg-sprites) into your theme folder `resources/icons/fa/`

```
├── resources
│   ├── icons
│   │   ├── fa
│   │   │   ├── brands.svg
│   │   │   ├── duotone.svg
│   │   │   ├── light.svg
│   │   │   ├── regular.svg
│   │   │   ├── sharp-light.svg
│   │   │   ├── sharp-regular.svg
│   │   │   ├── sharp-solid.svg
│   │   │   ├── sharp-thin.svg
│   │   │   ├── solid.svg
│   │   │   ├── thin.svg
```

## Custom library

```php
$library = new \ACF_icon_library("<LIBRARY_LABEL>", "<LIBRARY_NAME>");

$library->setResolver(string $url); // URL to resolve your icon
// Placeholders :
//
// {{assetPath}} - Path to your theme root
// {{library}} - Library name
// {{subset}} - Subset key
// {{name}} - Icon name

$library->setSpritesheet(bool $support); // (default) false, Enable support for SVG Sprites

$library->addSubset(string $id, string $name = '', string $prefix = ''); // Append a subset with prefix to your library

$library->addIcon(string $id, string $name = '', ?string $subset = null, string $prefix = ''); // Append an icon to your library
```

### Example

Add Heroicons library

```php
$library = new \ACF_icon_library("Heroicons", "heroicons");
$library->setResolver("https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/{{subset}}/{{name}}.svg");

// Add subsets
$library->addSubset("solid", "Solid");
$library->addSubset("outline", "Outline", "o");

// Add Solid Icons
$library->addIcon('chat-bubble-left', "Chat bubble on left", "solid");
$library->addIcon('cloud', "Cloud", "solid");
$library->addIcon('cog', "Cog", "solid");
$library->addIcon('document-text', "Text document", "solid");
$library->addIcon('gift', "Gift", "solid");
$library->addIcon('speaker-wave', "Speaker wave", "solid");

// Add Outline Icons
$library->addIcon('chat-bubble-left', "Chat bubble on left", "outline", "o");
$library->addIcon('cloud', "Cloud", "outline", "o");
$library->addIcon('cog', "Cog", "outline", "o");
$library->addIcon('document-text', "Text document", "outline", "o");
$library->addIcon('gift', "Gift", "outline", "o");
$library->addIcon('speaker-wave', "Speaker wave", "outline", "o");
```

Append Heroicons library to registry

```php
add_filter( 'acf/icon_field/registry', function( \ACF_icon_registry $registry ) use ($library) {
    $registry->addLibrary($library); // To add a new library
    return $registry;
}, 10, 1 );
```

## Hooks

#### Disable default icons set

```php
add_filter( 'acf/icon_field/register_default', function( bool $register ) {
    $register = false;
    return $register;
}, 10, 1 );
```

#### Change/Disable Font Awesome icons set

```php
add_filter( 'acf/icon_field/register_font-awesome', function( $register ) {
    $register = "free"; // (default) To enable Font Awesome Free
    $register = "pro"; // To enable Font Awesome Pro via an SVG Sprite sheet
    $register = false; // To disable Font Awesome
    
    return $register;
}, 10, 1 );
```

#### Customize Icon Library registry

```php
add_filter( 'acf/icon_field/registry', function( \ACF_icon_registry $registry ) {
        
    $library = new \ACF_icon_library("Lorem", "lo");
    ...
    
    $registry->addLibrary($library); // To add a new library
    $registry->removeLibrary('fa'); // To remove a library
    $registry->getLibraries(); // Get all libraries
    $registry->getLibrary(); // Get one library
    
    return $registry;
}, 10, 1 );
```

#### Disable cache optimisation

```php
add_filter( 'acf/icon_field/use_cache', '__return_false');
```


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@arnaud-ritti](https://github.com/arnaud-ritti)

  