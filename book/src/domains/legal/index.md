# Domain: Legal

## View: Identity

![Identity](./legal-identity.svg)

<span class="figure caption">Identity</span>

## View: Contracts

![Contracts](./legal-contracts.svg)

<span class="figure caption">Contracts</span>

## Views: Entities

![Entities](./legal-entities.svg)

<span class="figure caption">Legal Entities</span>

## Views: Business Entities

The concepts shown here as sub-classes of `Business Entity` are reasonably
complete but not elaborated as a part of the ontology at this time as they
have not yet been necessary.

![Business Entities](./legal-business-entities.svg)

<span class="figure caption">Business Entities</span>

## Views: Governmental Entities

The concepts shown here as sub-classes of `Governmental Entity` are reasonably
complete but not elaborated as a part of the ontology at this time as they
have not yet been necessary.

![Governmental Entities](./legal-government-entities.svg)

<span class="figure caption">Governmental Entities</span>

## Example

![Example Entities](./legal-entities-example.svg)

<span class="figure caption">Legal Entity Example</span>

## Classes

### Business entity

Definition:

> ...

OWL:

```turtle
lgl:BusinessEntity a rdfs:Class ;
  rdfs:subClassOf lgl:JuridicalPerson ;
  skos:prefLabel "Business entity"@en ;
  skos:definition "..."@en .
```

### Claim

Definition:

> ...

OWL:

```turtle
lgl:Claim a rdfs:Class ;
  rdfs:subClassOf fnd:Outcome ;
  skos:prefLabel "Claim"@en ;
  skos:definition "..."@en .
```

### Consideration

Definition:

> ...

OWL:

```turtle
lgl:Consideration a rdfs:Class ;
  rdfs:subClassOf fnd:Thing ;
  skos:prefLabel "Consideration"@en ;
  skos:definition "..."@en .
```

### Contract

Definition:

> ...

OWL:

```turtle
lgl:Contract a rdfs:Class ;
  rdfs:subClassOf fnd:Agreement ;
  skos:prefLabel "Contract"@en ;
  skos:definition "..."@en .
```

### Entity group

Definition:

> ...

OWL:

```turtle
lgl:EntityGroup a rdfs:Class ;
  rdfs:subClassOf fnd:DependentThing ;
  skos:prefLabel "Entity group"@en ;
  skos:definition "..."@en .
```

### Formal organization

Definition:

> ...

OWL:

```turtle
lgl:FormalOrganization a rdfs:Class ;
  rdfs:subClassOf lgl:HierarchicalEntityGroup ;
  skos:prefLabel "Formal organization"@en ;
  skos:definition "..."@en .
```

### Governmental entity

Definition:

> ...

OWL:

```turtle
lgl:GovernmentalEntity a rdfs:Class ;
  rdfs:subClassOf lgl:JuridicalPerson ;
  skos:prefLabel "Governmental entity"@en ;
  skos:definition "..."@en .
```

### Hierarchical entity group

Definition:

> ...

OWL:

```turtle
lgl:HierarchicalEntityGroup a rdfs:Class ;
  rdfs:subClassOf lgl:EntityGroup ;
  skos:prefLabel "Hierarchical entity group"@en ;
  skos:definition "..."@en .
```

### Identity claim

Definition:

> ...

OWL:

```turtle
lgl:IdentityClaim a rdfs:Class ;
  rdfs:subClassOf lgl:LegalDocument ;
  skos:prefLabel "Identity claim"@en ;
  skos:definition "..."@en .
```

### Juridical person

Definition:

> ...

OWL:

```turtle
lgl:JuridicalPerson a rdfs:Class ;
  rdfs:subClassOf lgl:LegalEntity ;
  skos:prefLabel "Juridical person"@en ;
  skos:definition "..."@en .
```

### Jurisdiction

Definition:

> ...

OWL:

```turtle
lgl:Jurisdiction a rdfs:Class ;
  rdfs:subClassOf fnd:SpatialRegion ;
  skos:prefLabel "Jurisdiction"@en ;
  skos:definition "..."@en .
```

### Legal document

Definition:

> ...

OWL:

```turtle
lgl:LegalDocument a rdfs:Class ;
  rdfs:subClassOf fnd:Document ;
  skos:prefLabel "Legal document"@en ;
  skos:definition "..."@en .
```

### Legal entity

Definition:

> ...

OWL:

```turtle
lgl:LegalEntity a rdfs:Class ;
  rdfs:subClassOf fnd:Referent ;
  skos:prefLabel "Legal entity"@en ;
  skos:definition "..."@en .
```

### Legal identification scheme

Definition:

> ...

OWL:

```turtle
lgl:LegalIdentificationScheme a rdfs:Class ;
  rdfs:subClassOf fnd:IdentificationScheme ;
  skos:prefLabel "Legal identification scheme"@en ;
  skos:definition "..."@en .
```

### Legal identifier

Definition:

> ...

OWL:

```turtle
lgl:LegalIdentifier a rdfs:Class ;
  rdfs:subClassOf fnd:ThIdentifiering ;
  skos:prefLabel "Legal identifier"@en ;
  skos:definition "..."@en .
```

### Natural person

Definition:

> ...

OWL:

```turtle
lgl:NaturalPerson a rdfs:Class ;
  rdfs:subClassOf lgl:LegalEntity ;
  skos:prefLabel "Natural person"@en ;
  skos:definition "..."@en .
```

### Obligation

Definition:

> ...

OWL:

```turtle
lgl:Obligation a rdfs:Class ;
  rdfs:subClassOf fnd:Outcome ;
  skos:prefLabel "Obligation"@en ;
  skos:definition "..."@en .
```

### Sub contract

Definition:

> ...

OWL:

```turtle
lgl:SubContract a rdfs:Class ;
  rdfs:subClassOf lgl:Contract ;
  skos:prefLabel "Sub contract"@en ;
  skos:definition "..."@en .
```

### Surviving obligation

Definition:

> ...

OWL:

```turtle
lgl:SurvivingObligation a rdfs:Class ;
  rdfs:subClassOf lgl:Obligation ;
  skos:prefLabel "Surviving obligation"@en ;
  skos:definition "..."@en .
```

## Properties

### assertion artifact

Definition:

> ...

```turtle
lgl:assertionArtifact a rdfs:Property ;
  rdfs:domain lgl:IdentityClaim ;
  rdfs:range lgl:LegalDocument ;
  skos:prefLabel "assertion artifact"@en ;
  skos:definition "..."@en .
```

### assertion claim

Definition:

> ...

```turtle
lgl:assertionClaim a rdfs:Property ;
  rdfs:domain lgl:LegalEntity ;
  rdfs:range lgl:IdentityClaim ;
  skos:prefLabel "assertion claim"@en ;
  skos:definition "..."@en .
```

### assertion legal identifier

Definition:

> ...

```turtle
lgl:assertionLegalIdentifier a rdfs:Property ;
  rdfs:domain lgl:IdentityClaim ;
  rdfs:range lgl:LegalIdentifier ;
  skos:prefLabel "assertion legal identifier"@en ;
  skos:definition "..."@en .
```

### assertion validity span

Definition:

> ...

```turtle
lgl:assertionValiditySpan a rdfs:Property ;
  rdfs:domain lgl:IdentityClaim ;
  rdfs:range fnd:TemporalSpan ;
  skos:prefLabel "assertion validity span"@en ;
  skos:definition "..."@en .
```

### contractually constructs

Definition:

> ...

```turtle
lgl:contractuallyConstructs a rdfs:Property ;
  rdfs:domain lgl:Thing ;
  rdfs:range fnd:Thing ; # Claim OR Obligation
  skos:prefLabel "contractually constructs"@en ;
  skos:definition "..."@en .
```

### contractually entails

Definition:

> ...

```turtle
lgl:contractuallyEntails a rdfs:Property ;
  rdfs:domain lgl:Contract ;
  rdfs:range lgl:Consideration ; 
  skos:prefLabel "contractually entails"@en ;
  skos:definition "..."@en .
```

### hasJurisdiction

Definition:

> ...

```turtle
lgl:hasJurisdiction a rdfs:Property ;
  rdfs:domain lgl:GovernmentalEntity ;
  rdfs:range lgl:Jurisdiction ;
  skos:prefLabel "has jurisdiction"@en ;
  skos:definition "..."@en .
```

### has member

Definition:

> ...

```turtle
lgl:hasMember a rdfs:Property ;
  rdfs:domain lgl:EntityGroup ;
  rdfs:range lgl:LegalEntity ;
  skos:prefLabel "has member"@en ;
  skos:definition "..."@en .
```

### has organization

Definition:

> ...

```turtle
lgl:hasOrganization a rdfs:Property ;
  rdfs:domain fnd:Thing ; # BusinessEntity OR GovernmentalEntity
  rdfs:range lgl:FormalOrganization ;
  skos:prefLabel "has organization"@en ;
  skos:definition "..."@en .
```

### has sub contract

Definition:

> ...

```turtle
lgl:hasSubContract a rdfs:Property ;
  rdfs:domain lgl:Contract ;
  rdfs:range lgl:SubContract ;
  skos:prefLabel "has sub contract"@en ;
  skos:definition "..."@en .
```

### is contained within group

Definition:

> ...

```turtle
lgl:isContainedWithinGroup a rdfs:Property ;
  rdfs:domain lgl:HierarchicalEntityGroup ;
  rdfs:range lgl:EntityGroup ;
  skos:prefLabel "is contained within group"@en ;
  skos:definition "..."@en .
```

### is legally owned by

Definition:

> ...

```turtle
lgl:isLegallyOwnedBy a rdfs:Property ;
  rdfs:domain fnd:Thing ;
  rdfs:range lgl:LegalEntity ;
  skos:prefLabel "is legally owned by"@en ;
  skos:definition "..."@en .
```

### is legal owner

Definition:

> ...

```turtle
lgl:isLegalOwner a rdfs:Property ;
  rdfs:domain lgl:LegalEntity ;
  rdfs:range fnd:Thing ;
  skos:prefLabel "is legal owner"@en ;
  skos:definition "..."@en .
```

### is member of group

Definition:

> ...

```turtle
lgl:isMemberOfGroup a rdfs:Property ;
  rdfs:domain lgl:EntityGroup ;
  rdfs:range lgl:LegalEntity ;
  skos:prefLabel "is member of group"@en ;
  skos:definition "..."@en .
```

### issuing authority

Definition:

> ...

```turtle
lgl:issuingAuthority a rdfs:Property ;
  rdfs:domain lgl:LegalIdentificationScheme ;
  rdfs:range lgl:Legalentity ; # LegalEntity AND Party
  skos:prefLabel "issuing authority"@en ;
  skos:definition "..."@en .
```

### jurisdictional region

Definition:

> ...

```turtle
lgl:jurisdictionalRegion a rdfs:Property ;
  rdfs:domain lgl:Jurisdiction ;
  rdfs:range fnd:SpatialRegion ;
  skos:prefLabel "jurisdictional region"@en ;
  skos:definition "..."@en .
```

### contains entity group

Definition:

> ...

```turtle
lgl:containsEntityGroup a rdfs:Property ;
  rdfs:domain lgl:HierarchicalEntityGroup ;
  rdfs:range lgl:Thing ; # HierarchicalEntityGroup or EntityGroup
  skos:prefLabel "contains entity group"@en ;
  skos:definition "..."@en .
```

### promisee

Definition:

> ...

```turtle
lgl:promisee a rdfs:Property ;
  rdfs:domain lgl:Claim ;
  rdfs:range fnd:Party ;
  skos:prefLabel "promisee"@en ;
  skos:definition "..."@en .
```

### promisor

Definition:

> ...

```turtle
lgl:promisor a rdfs:Property ;
  rdfs:domain lgl:Obligation ;
  rdfs:range fnd:Party ;
  skos:prefLabel "promisor"@en ;
  skos:definition "..."@en .
```
