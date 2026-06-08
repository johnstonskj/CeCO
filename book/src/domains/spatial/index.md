# Domain: Spatial

## View: Postal Schemes

![Postal Schemes](./spatial-postalcode-scheme.svg)

<span class="figure caption">Postal Addressing Schemes</span>

## View: Geographic Coordinate Scheme

![Geographic Coordinate Scheme](./spatial-lle-scheme.svg)

<span class="figure caption">Geographic Coordinate Scheme</span>

## Classes

### Geographic Coordinate

Definition:

> TBD

OWL:

```turtle
:GeographicCoordinate a owl:Class ;
  rdfs:subClassOf :SpatialLocation ;
  skos:prefLabel "Geographic cordinate"@en ;
  skos:definition ""@en .
```

### Geographic Coordinate Scheme

Definition:

> TBD

OWL:

```turtle
:Geographic coordinate scheme a owl:Class ;
  rdfs:subClassOf :SpatialReferenceScheme ;
  skos:prefLabel "Geographic coordinate scheme"@en ;
  skos:definition ""@en .
```

### Postal Address

Definition:

> TBD

OWL:

```turtle
:PostalAddress a owl:Class ;
  rdfs:subClassOf :SpatialLocation ;
  skos:prefLabel "Postal address"@en ;
  skos:definition ""@en .
```

### Postal Address Scheme

Definition:

> TBD

OWL:

```turtle
:PostalAddressScheme a owl:Class ;
  rdfs:subClassOf :SpatialReferenceScheme ;
  skos:prefLabel "Postal address scheme"@en ;
  skos:definition ""@en .
```

### Postal Code

Definition:

> TBD

OWL:

```turtle
:PostalCode a owl:Class ;
  rdfs:subClassOf :SpatialLocation ;
  skos:prefLabel "Postal code"@en ;
  skos:definition ""@en .
```

### Postal Code Scheme

Definition:

> TBD

OWL:

```turtle
:PostalCodeScheme a owl:Class ;
  rdfs:subClassOf :SpatialReferenceScheme ;
  skos:prefLabel "Postal code scheme"@en ;
  skos:definition ""@en .
```

## Properties

### hasPostalCode

Definition:

> TBD

OWL:

```turtle
:hasPostalCode a owl:ObjectProperty ;
  rdfs:domain :PostalAddress ;
  rdfs:range :PostalCode ;
  skos:prefLabel "has postal code"@en ;
  skos:definition ""@en .
```

### inGeographicScheme

Definition:

> TBD

OWL:

```turtle
:inGeographicScheme a owl:ObjectProperty ;
  rdfs:subPropertyOf :inScheme ;
  rdfs:domain :GeographicCoordinate ;
  rdfs:range :GeographicCoordinateScheme ;
  skos:prefLabel "in geographic scheme"@en ;
  skos:definition ""@en .
```
