package management.tennis.data;

import java.util.List;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import management.tennis.model.Rank;

public class RankRepository {
	@Inject
	private EntityManager em;

	public List<Rank>displayRank() {
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<Rank> criteria = cb.createQuery(Rank.class);
		Root<Rank> rank = criteria.from(Rank.class);
		// Swap criteria statements if you would like to try out type-safe
		// criteria queries, a new
		// feature in JPA 2.0
		// criteria.select(member).orderBy(cb.asc(member.get(Member_.name)));
		criteria.select(rank);
		return em.createQuery(criteria).getResultList();
	}
}
