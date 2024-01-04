<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

require_once  __DIR__ . '/class-adeliom-acf-field-icon-library.php';

class ACF_icon_registry implements \Serializable, \JsonSerializable
{
    private static $instance;
    private $data;

    private function __construct()
    {
        $this->data = [];
    }

    public static function getInstance()
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function addLibrary(\ACF_icon_library $library)
    {
        $this->data[$library->getLibrary()] = $library;
        return $this;
    }

    public function removeLibrary(string $key)
    {
        unset($this->data[$key]);
        return $this;
    }


    public function getLibraries()
    {
        return $this->data;
    }

    public function getLibrary(string $key)
    {
        if (isset($this->data[$key])) {
            return $this->data[$key];
        }
        return null;
    }

    public function toArray(): array
    {
        return array_values($this->data);
    }

    public function __serialize(): array
    {
        return $this->toArray();
    }

    public function serialize(): array|string|null
    {
        return $this->__serialize();
    }

    public function jsonSerialize()
    {
        return $this->__serialize();
    }

    public function unserialize(string $data)
    {
        throw new \Exception('Not implemented');
    }


}