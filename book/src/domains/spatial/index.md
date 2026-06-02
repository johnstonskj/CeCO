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
fnd:GeographicCoordinate a rdfs:Class ;
  rdfs:subClassOf fnd:SpacialLocation ;
  skos:prefLabel "GeographicCoordinate"@en ;
  skos:definition ""@en .
```

### Geographic Coordinate Scheme

Definition:

> TBD

OWL:

```turtle
fnd:GeographicCoordinateScheme a rdfs:Class ;
  rdfs:subClassOf fnd:SpacialReferenceScheme ;
  skos:prefLabel "GeographicCoordinateScheme"@en ;
  skos:definition ""@en .
```

### Postal Address

Definition:

> TBD

OWL:

```turtle
fnd:PostalAddress a rdfs:Class ;
  rdfs:subClassOf fnd:SpacialLocation ;
  skos:prefLabel "PostalAddress"@en ;
  skos:definition ""@en .
```

### Postal Address Scheme

Definition:

> TBD

OWL:

```turtle
fnd:PostalAddressScheme a rdfs:Class ;
  rdfs:subClassOf fnd:SpacialReferenceScheme ;
  skos:prefLabel "PostalAddressScheme"@en ;
  skos:definition ""@en .
```

### Postal Code

Definition:

> TBD

OWL:

```turtle
fnd:PostalCode a rdfs:Class ;
  rdfs:subClassOf fnd:SpacialLocation ;
  skos:prefLabel "PostalCode"@en ;
  skos:definition ""@en .
```

### Postal Code Scheme

Definition:

> TBD

OWL:

```turtle
fnd:PostalCodeScheme a rdfs:Class ;
  rdfs:subClassOf fnd:SpacialReferenceScheme ;
  skos:prefLabel "PostalCodeScheme"@en ;
  skos:definition ""@en .
```

## Properties

### hasPostalCode

Definition:

> TBD

OWL:

```turtle
fnd:hasPostalCode a rdfs:Property ;
  rdfs:domain fnd:PostalAddress ;
  rdfs:range fnd:PostalCode ;
  skos:prefLabel "hasPostalCode"@en ;
  skos:definition ""@en .
```

### inGeographicScheme

Definition:

> TBD

OWL:

```turtle
fnd:inGeographicScheme a rdfs:Property ;
  rdfs:subPropertyOf fnd:inScheme ;
  rdfs:domain fnd:GeographicCoordinate ;
  rdfs:range fnd:GeographicCoordinateScheme ;
  skos:prefLabel "inGeographicScheme"@en ;
  skos:definition ""@en .
```
