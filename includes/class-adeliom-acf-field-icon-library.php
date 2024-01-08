<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class ACF_icon_library implements \JsonSerializable
{
    private string $name;
    private string $library;
    private array $subsets = [];
    private ?string $resolver = '';
    private bool $spritesheet = false;
    private array $icons = [];

    public function __construct(string $name, string $library)
    {
        $this->name = $name;
        $this->library = $library;
    }

    /**
     * @return string
     */
    public function getLibrary(): string
    {
        return $this->library;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    public function getSubsets(): array
    {
        return $this->subsets;
    }

    public function setSubsets( array $subsets ): void
    {
        $this->subsets = $subsets;
    }

    public function addSubset( string $id, string $name = '', string $prefix = '' ): self
    {
        $this->subsets[$id] = [
            'name' => $name ?? $id,
            'prefix' => $prefix
        ];

        return $this;
    }

    public function getIcons(): array
    {
        return $this->icons;
    }

    public function setIcons( array $icons ): void
    {
        $this->icons = $icons;
    }

    public function addIcon( string $id, string $name = '', ?string $subset = null, string $prefix = '' ): self
    {
        $this->icons[] = [
            'id' => $id,
            'name' => $name ?? $id,
            'subset' => $subset,
            'prefix' => $prefix
        ];

        return $this;
    }

    public function getResolver(): ?string
    {
        return $this->resolver;
    }

    public function setResolver(?string $resolver): void
    {
        $this->resolver = $resolver;
    }

    public function isSpritesheet(): bool
    {
        return $this->spritesheet;
    }

    public function setSpritesheet(bool $spritesheet): void
    {
        $this->spritesheet = $spritesheet;
    }


    public function __serialize(): array
    {
        return [
            'name' => $this->name,
            'library' => $this->library,
            'subsets' => $this->subsets,
            'resolver' => $this->resolver,
            'spritesheet' => $this->spritesheet,
            'icons' => $this->icons
        ];
    }

    public function jsonSerialize(): mixed
    {
        return $this->__serialize();
    }
}