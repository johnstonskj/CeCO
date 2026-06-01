# Spacial Aspects

![Spacial Aspect Classes](./spatial-aspects.svg)

<span class="figure caption">Spacial Aspects</span>

## Classes

### Spacial Extent

```turtle
fnd:SpacialExtent a rdfs:Class ;
  rdfs:subClassOf fnd:SpatialReference ;
  skos:prefLabel "SpacialExtent"@en ;
  skos:definition ""@en .
```

### Spacial Location

```turtle
fnd:SpacialLocation a rdfs:Class ;
  rdfs:subClassOf fnd:SpatialReference ;
  skos:prefLabel "SpacialLocation"@en ;
  skos:definition ""@en .
```

### Spacial Object

```turtle
fnd:SpacialObject a rdfs:Class ;
  rdfs:subClassOf fnd:SpatialReference ;
  skos:prefLabel "SpacialObject"@en ;
  skos:definition ""@en .
```

### Spatial Reference

```turtle
fnd:SpatialReference a rdfs:Class ;
  rdfs:subClassOf fnd:Reference ;
  skos:prefLabel "SpatialReference"@en ;
  skos:definition ""@en .
```

### Spatial Reference Scheme

```turtle
fnd:SpatialReferenceScheme a rdfs:Class ;
  rdfs:subClassOf fnd:Scheme ;
  skos:prefLabel "SpatialReferenceScheme"@en ;
  skos:definition ""@en .
```

### Spatial Region

```turtle
fnd:SpatialRegion a rdfs:Class ;
  rdfs:subClassOf fnd:SpatialReference ;
  skos:prefLabel "SpatialRegion"@en ;
  skos:definition ""@en .
```

## Properties

### spatial Property

```turtle
fnd:spatialProperty a rdfs:Property ;
  rdfs:domain fnd:Thing ;
  rdfs:range fnd:SpatialReference ;
  skos:prefLabel "spatialProperty"@en ;
  skos:definition ""@en .
```

### in Spatial Scheme

```turtle
fnd:inSpatialScheme a rdfs:Property ;
  rdfs:domain fnd:SpatialReference ;
  rdfs:range fnd:SpatialReferenceScheme ;
  skos:prefLabel "inSpatialScheme"@en ;
  skos:definition ""@en .
```
